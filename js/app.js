// ---------- State ----------
let activeCategory = "all";
let searchTerm = "";
let pantry = loadPantry();
let customRecipes = loadStored("haitian-custom-recipes", []);
let overrides = loadStored("haitian-recipe-overrides", {});

function loadStored(storageKey, fallback) {
  try {
    return JSON.parse(localStorage.getItem(storageKey)) ?? fallback;
  } catch {
    return fallback;
  }
}

function saveRecipeStore() {
  localStorage.setItem("haitian-custom-recipes", JSON.stringify(customRecipes));
  localStorage.setItem("haitian-recipe-overrides", JSON.stringify(overrides));
}

// Built-in dishes (with any user edits applied) plus user-added dishes.
function getAllRecipes() {
  return RECIPES.map((r) => overrides[r.id] || r).concat(customRecipes);
}

// ---------- Elements ----------
const recipeGrid = document.getElementById("recipe-grid");
const categoryBar = document.getElementById("category-bar");
const searchInput = document.getElementById("search-input");
const tabBrowse = document.getElementById("tab-browse");
const tabCook = document.getElementById("tab-cook");
const viewBrowse = document.getElementById("view-browse");
const viewCook = document.getElementById("view-cook");
const ingredientInput = document.getElementById("ingredient-input");
const addIngredientBtn = document.getElementById("add-ingredient-btn");
const chipsContainer = document.getElementById("pantry-chips");
const matchResults = document.getElementById("match-results");
const clearPantryBtn = document.getElementById("clear-pantry-btn");
const suggestionsBox = document.getElementById("ingredient-suggestions");
const modal = document.getElementById("recipe-modal");
const modalBody = document.getElementById("modal-body");
const modalClose = document.getElementById("modal-close");
const tabManage = document.getElementById("tab-manage");
const viewManage = document.getElementById("view-manage");
const recipeForm = document.getElementById("recipe-form");
const formTitle = document.getElementById("form-title");

// ---------- Pantry persistence ----------
function loadPantry() {
  try {
    return JSON.parse(localStorage.getItem("haitian-pantry")) || [];
  } catch {
    return [];
  }
}
function savePantry() {
  localStorage.setItem("haitian-pantry", JSON.stringify(pantry));
}

// ---------- Ingredient normalization ----------
function normalize(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// Resolve what the user typed to a canonical ingredient key (or null).
function resolveIngredient(input) {
  const n = normalize(input);
  if (!n) return null;

  const allKeys = new Set();
  getAllRecipes().forEach((r) => r.ingredients.forEach((i) => allKeys.add(i.key)));

  if (allKeys.has(n)) return n;
  if (INGREDIENT_SYNONYMS[n]) return INGREDIENT_SYNONYMS[n];

  // Singular/plural forgiveness
  const singular = n.replace(/s$/, "");
  if (allKeys.has(singular)) return singular;
  if (INGREDIENT_SYNONYMS[singular]) return INGREDIENT_SYNONYMS[singular];

  // Substring match against keys ("chicken thigh" -> "chicken")
  for (const key of allKeys) {
    if (n.includes(key) || key.includes(n)) return key;
  }
  for (const [syn, key] of Object.entries(INGREDIENT_SYNONYMS)) {
    if (n === syn || n.includes(syn)) return key;
  }
  return null;
}

// All canonical keys + synonyms, for autocomplete suggestions.
function allSuggestionTerms() {
  const terms = new Set();
  getAllRecipes().forEach((r) => r.ingredients.forEach((i) => terms.add(i.key)));
  return [...terms].sort();
}

// ---------- Tabs ----------
const TABS = {
  browse: { tab: tabBrowse, view: viewBrowse },
  cook: { tab: tabCook, view: viewCook },
  manage: { tab: tabManage, view: viewManage }
};

function switchTab(name) {
  Object.entries(TABS).forEach(([key, t]) => {
    t.tab.classList.toggle("active", key === name);
    t.view.classList.toggle("hidden", key !== name);
  });
  if (name === "cook") renderMatches();
}
tabBrowse.addEventListener("click", () => switchTab("browse"));
tabCook.addEventListener("click", () => switchTab("cook"));
tabManage.addEventListener("click", () => {
  resetForm();
  switchTab("manage");
});

// ---------- Browse view ----------
function renderCategories() {
  categoryBar.innerHTML = "";
  CATEGORIES.forEach((cat) => {
    const btn = document.createElement("button");
    btn.className = "category-pill" + (cat.id === activeCategory ? " active" : "");
    btn.innerHTML = `${cat.label}<span class="kreyol-label">${cat.kreyol}</span>`;
    btn.addEventListener("click", () => {
      activeCategory = cat.id;
      renderCategories();
      renderRecipes();
    });
    categoryBar.appendChild(btn);
  });
}

function recipeMatchesSearch(recipe, term) {
  if (!term) return true;
  const haystack = [
    recipe.name,
    recipe.english,
    recipe.description,
    ...recipe.ingredients.map((i) => i.item)
  ]
    .join(" ")
    .toLowerCase();
  return haystack.includes(term.toLowerCase());
}

function renderRecipes() {
  const visible = getAllRecipes().filter(
    (r) =>
      (activeCategory === "all" || r.category === activeCategory) &&
      recipeMatchesSearch(r, searchTerm)
  );
  recipeGrid.innerHTML = "";
  if (visible.length === 0) {
    recipeGrid.innerHTML = `<p class="empty-note">Pa gen anyen — nothing found. Try a different search!</p>`;
    return;
  }
  visible.forEach((recipe) => recipeGrid.appendChild(buildCard(recipe)));
}

function buildCard(recipe, matchInfo) {
  const card = document.createElement("article");
  card.className = "recipe-card";
  card.tabIndex = 0;

  let matchBadge = "";
  if (matchInfo) {
    const pct = Math.round(matchInfo.score * 100);
    const cls = pct >= 75 ? "match-high" : pct >= 40 ? "match-mid" : "match-low";
    matchBadge = `<div class="match-badge ${cls}">${pct}% match · you have ${matchInfo.have}/${matchInfo.total}</div>`;
  }

  card.innerHTML = `
    <div class="card-emoji">${recipe.emoji}</div>
    ${matchBadge}
    <h3>${recipe.name}</h3>
    <p class="card-english">${recipe.english}</p>
    <p class="card-desc">${recipe.description.slice(0, 90)}…</p>
    <div class="card-meta">
      <span>⏱ ${recipe.time}</span>
      <span>👥 ${recipe.serves}</span>
      <span class="difficulty diff-${recipe.difficulty.toLowerCase()}">${recipe.difficulty}</span>
    </div>
  `;
  const open = () => openRecipe(recipe);
  card.addEventListener("click", open);
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      open();
    }
  });
  return card;
}

searchInput.addEventListener("input", (e) => {
  searchTerm = e.target.value.trim();
  renderRecipes();
});

// ---------- Recipe modal ----------
function openRecipe(recipe) {
  const pantrySet = new Set(pantry);
  modalBody.innerHTML = `
    <div class="modal-header">
      <div class="modal-emoji">${recipe.emoji}</div>
      <div>
        <h2>${recipe.name}</h2>
        <p class="card-english">${recipe.english}</p>
      </div>
    </div>
    <div class="card-meta modal-meta">
      <span>⏱ ${recipe.time}</span>
      <span>👥 Serves ${recipe.serves}</span>
      <span class="difficulty diff-${recipe.difficulty.toLowerCase()}">${recipe.difficulty}</span>
    </div>
    <p class="modal-desc">${recipe.description}</p>
    <h3 class="section-title">Engredyan · Ingredients</h3>
    <ul class="ingredient-list">
      ${recipe.ingredients
        .map((ing) => {
          const have = pantrySet.has(ing.key);
          return `<li class="${have ? "have" : ""}">${have ? "✓" : "•"} ${ing.item}</li>`;
        })
        .join("")}
    </ul>
    <h3 class="section-title">Preparasyon · Steps</h3>
    <ol class="step-list">
      ${recipe.steps.map((s) => `<li>${s}</li>`).join("")}
    </ol>
    <div class="modal-actions">
      <button class="btn-secondary" id="modal-edit-btn">✏️ Edit this dish</button>
      ${isCustomRecipe(recipe.id) ? `<button class="btn-danger" id="modal-delete-btn">🗑 Delete</button>` : ""}
      ${overrides[recipe.id] ? `<button class="btn-ghost" id="modal-restore-btn">↩️ Restore original</button>` : ""}
    </div>
  `;

  document.getElementById("modal-edit-btn").addEventListener("click", () => {
    closeModal();
    openEditor(recipe);
  });
  const deleteBtn = document.getElementById("modal-delete-btn");
  if (deleteBtn) {
    deleteBtn.addEventListener("click", () => {
      if (!confirm(`Delete "${recipe.name}"? This can't be undone.`)) return;
      customRecipes = customRecipes.filter((r) => r.id !== recipe.id);
      saveRecipeStore();
      closeModal();
      refreshAllViews();
    });
  }
  const restoreBtn = document.getElementById("modal-restore-btn");
  if (restoreBtn) {
    restoreBtn.addEventListener("click", () => {
      delete overrides[recipe.id];
      saveRecipeStore();
      closeModal();
      refreshAllViews();
    });
  }

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function isCustomRecipe(id) {
  return customRecipes.some((r) => r.id === id);
}

function refreshAllViews() {
  renderRecipes();
  renderMatches();
}

function closeModal() {
  modal.classList.add("hidden");
  document.body.style.overflow = "";
}
modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// ---------- Pantry / matching ----------
function addIngredient() {
  const raw = ingredientInput.value.trim();
  if (!raw) return;
  const key = resolveIngredient(raw);
  ingredientInput.value = "";
  suggestionsBox.classList.add("hidden");
  if (!key) {
    flashInputError(`Couldn't find "${raw}" in any Haitian recipe — try another word (e.g. "chicken", "plantain")`);
    return;
  }
  if (!pantry.includes(key)) {
    pantry.push(key);
    savePantry();
    renderPantry();
    renderMatches();
  }
  ingredientInput.focus();
}

function flashInputError(msg) {
  const note = document.getElementById("input-note");
  note.textContent = msg;
  note.classList.add("visible");
  setTimeout(() => note.classList.remove("visible"), 3500);
}

function removeIngredient(key) {
  pantry = pantry.filter((k) => k !== key);
  savePantry();
  renderPantry();
  renderMatches();
}

function renderPantry() {
  chipsContainer.innerHTML = "";
  pantry.forEach((key) => {
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.innerHTML = `${key} <button aria-label="Remove ${key}">×</button>`;
    chip.querySelector("button").addEventListener("click", () => removeIngredient(key));
    chipsContainer.appendChild(chip);
  });
  clearPantryBtn.classList.toggle("hidden", pantry.length === 0);
}

function scoreRecipe(recipe) {
  const pantrySet = new Set(pantry);
  const total = recipe.ingredients.length;
  let have = 0;
  let essentialHave = 0;
  let essentialTotal = 0;
  recipe.ingredients.forEach((ing) => {
    if (ing.essential) essentialTotal++;
    if (pantrySet.has(ing.key)) {
      have++;
      if (ing.essential) essentialHave++;
    }
  });
  // Essential ingredients count double so "has the pork" beats "has the salt".
  const score =
    (have + essentialHave) / (total + essentialTotal || 1);
  return { score, have, total, essentialHave, essentialTotal };
}

function renderMatches() {
  matchResults.innerHTML = "";
  if (pantry.length === 0) {
    matchResults.innerHTML = `
      <div class="empty-state">
        <div class="empty-emoji">🧺</div>
        <p><strong>Your pantry is empty!</strong></p>
        <p>Add ingredients above and we'll tell you which Haitian dishes you can make.
        Try: <em>chicken, rice, plantain, cabbage…</em></p>
      </div>`;
    return;
  }

  const scored = getAllRecipes().map((r) => ({ recipe: r, ...scoreRecipe(r) }))
    .filter((s) => s.have > 0)
    .sort((a, b) => b.score - a.score || b.have - a.have);

  if (scored.length === 0) {
    matchResults.innerHTML = `<p class="empty-note">No matches yet — add a few more ingredients!</p>`;
    return;
  }

  const missingNote = document.createElement("p");
  missingNote.className = "results-heading";
  missingNote.textContent = `Men sa ou ka kwit! · Here's what you can cook (${scored.length} dishes):`;
  matchResults.appendChild(missingNote);

  const grid = document.createElement("div");
  grid.className = "recipe-grid";
  scored.forEach((s) => grid.appendChild(buildCard(s.recipe, s)));
  matchResults.appendChild(grid);
}

// Autocomplete suggestions while typing
ingredientInput.addEventListener("input", () => {
  const val = normalize(ingredientInput.value);
  if (!val) {
    suggestionsBox.classList.add("hidden");
    return;
  }
  const matches = allSuggestionTerms()
    .filter((t) => t.startsWith(val) && !pantry.includes(t))
    .slice(0, 6);
  if (matches.length === 0) {
    suggestionsBox.classList.add("hidden");
    return;
  }
  suggestionsBox.innerHTML = "";
  matches.forEach((term) => {
    const btn = document.createElement("button");
    btn.textContent = term;
    btn.addEventListener("click", () => {
      ingredientInput.value = term;
      addIngredient();
    });
    suggestionsBox.appendChild(btn);
  });
  suggestionsBox.classList.remove("hidden");
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".pantry-input-row")) suggestionsBox.classList.add("hidden");
});

addIngredientBtn.addEventListener("click", addIngredient);
ingredientInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addIngredient();
});
clearPantryBtn.addEventListener("click", () => {
  pantry = [];
  savePantry();
  renderPantry();
  renderMatches();
});

// Quick-add starter ingredients
document.querySelectorAll(".quick-add").forEach((btn) => {
  btn.addEventListener("click", () => {
    ingredientInput.value = btn.dataset.ingredient;
    addIngredient();
  });
});

// ---------- Recipe editor ----------
const field = (id) => document.getElementById(id);

// Words stripped when deriving a matching key from an ingredient line.
const NON_KEY_WORDS = new Set([
  "lb", "lbs", "pound", "pounds", "cup", "cups", "tbsp", "tsp", "tablespoon",
  "tablespoons", "teaspoon", "teaspoons", "can", "cans", "oz", "ounce", "ounces",
  "clove", "cloves", "sprig", "sprigs", "bunch", "head", "stalk", "stick", "sticks",
  "pinch", "juice", "zest", "of", "a", "an", "the", "to", "taste", "or", "and",
  "optional", "whole", "large", "small", "medium", "fresh", "dried", "ripe",
  "chopped", "sliced", "minced", "cubed", "grated", "shredded", "peeled",
  "for", "frying", "serving", "melted", "mashed"
]);

function deriveKey(text) {
  const resolved = resolveIngredient(text);
  if (resolved) return resolved;
  const words = normalize(text).split(" ").filter((w) => w && !NON_KEY_WORDS.has(w));
  return words.join(" ") || normalize(text);
}

function resetForm() {
  recipeForm.reset();
  field("f-editing-id").value = "";
  field("f-serves").value = 4;
  formTitle.textContent = "Ajoute yon Pla · Add a New Dish";
  field("form-save-btn").textContent = "💾 Save Dish";
}

function openEditor(recipe) {
  field("f-editing-id").value = recipe.id;
  field("f-name").value = recipe.name;
  field("f-english").value = recipe.english || "";
  field("f-category").value = recipe.category;
  field("f-emoji").value = recipe.emoji || "";
  field("f-time").value = recipe.time || "";
  field("f-serves").value = recipe.serves || 4;
  field("f-difficulty").value = recipe.difficulty || "Easy";
  field("f-description").value = recipe.description || "";
  field("f-ingredients").value = recipe.ingredients
    .map((i) => (i.essential ? "* " : "") + i.item)
    .join("\n");
  field("f-steps").value = recipe.steps.join("\n");
  formTitle.textContent = `Chanje · Editing: ${recipe.name}`;
  field("form-save-btn").textContent = "💾 Save Changes";
  switchTab("manage");
  viewManage.scrollIntoView({ behavior: "smooth" });
}

recipeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const lines = (id) =>
    field(id).value.split("\n").map((l) => l.trim()).filter(Boolean);

  const editingId = field("f-editing-id").value;
  const recipe = {
    id: editingId || "custom-" + Date.now(),
    name: field("f-name").value.trim(),
    english: field("f-english").value.trim() || field("f-name").value.trim(),
    category: field("f-category").value,
    emoji: field("f-emoji").value.trim() || "🍲",
    time: field("f-time").value.trim() || "—",
    difficulty: field("f-difficulty").value,
    serves: Number(field("f-serves").value) || 4,
    description: field("f-description").value.trim() || "A homemade Haitian dish.",
    ingredients: lines("f-ingredients").map((line) => {
      const essential = line.startsWith("*");
      const item = line.replace(/^\*\s*/, "");
      return { item, key: deriveKey(item), essential };
    }),
    steps: lines("f-steps")
  };

  const isBuiltIn = RECIPES.some((r) => r.id === editingId);
  if (isBuiltIn) {
    overrides[editingId] = recipe;
  } else if (editingId && isCustomRecipe(editingId)) {
    customRecipes = customRecipes.map((r) => (r.id === editingId ? recipe : r));
  } else {
    customRecipes.push(recipe);
  }
  saveRecipeStore();
  resetForm();
  refreshAllViews();
  switchTab("browse");
  openRecipe(recipe);
});

document.getElementById("form-cancel-btn").addEventListener("click", () => {
  resetForm();
  switchTab("browse");
});

// ---------- Backup: export / import ----------
document.getElementById("export-btn").addEventListener("click", () => {
  const data = JSON.stringify({ customRecipes, overrides }, null, 2);
  const blob = new Blob([data], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "my-haitian-dishes.json";
  a.click();
  URL.revokeObjectURL(a.href);
});

const importFile = document.getElementById("import-file");
document.getElementById("import-btn").addEventListener("click", () => importFile.click());
importFile.addEventListener("change", () => {
  const file = importFile.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result);
      const imported = Array.isArray(data.customRecipes) ? data.customRecipes : [];
      const importedIds = new Set(imported.map((r) => r.id));
      customRecipes = customRecipes.filter((r) => !importedIds.has(r.id)).concat(imported);
      Object.assign(overrides, data.overrides || {});
      saveRecipeStore();
      refreshAllViews();
      switchTab("browse");
      alert(`Imported ${imported.length} dish(es) successfully! 🇭🇹`);
    } catch {
      alert("Sorry, that file doesn't look like a valid backup.");
    }
    importFile.value = "";
  };
  reader.readAsText(file);
});

// Fill the category dropdown (skip the "All" filter pseudo-category)
const categorySelect = field("f-category");
CATEGORIES.filter((c) => c.id !== "all").forEach((c) => {
  const opt = document.createElement("option");
  opt.value = c.id;
  opt.textContent = `${c.label} · ${c.kreyol}`;
  categorySelect.appendChild(opt);
});

// ---------- Init ----------
renderCategories();
renderRecipes();
renderPantry();

// Offline support (needs https or localhost; silently skipped elsewhere)
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}
