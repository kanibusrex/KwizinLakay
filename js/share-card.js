// ---------- Recipe card export / sharing ----------
// Renders a recipe as a branded PNG "recipe card" on a canvas, then lets the
// user share it (native share sheet → Messenger, Mail, WhatsApp, etc.),
// email it, download it, or copy it as plain text.

const CARD = {
  width: 1080,
  pad: 72,
  blue: "#00209f",
  red: "#d21034",
  gold: "#f7b32b",
  cream: "#fdf8ef",
  ink: "#22222c",
  inkSoft: "#5a5a68",
  serif: '"Fraunces", Georgia, serif',
  sans: '"Nunito", system-ui, sans-serif'
};

// Plain-text version, used for email bodies, share text, and "Copy text".
function recipeToText(recipe) {
  const lines = [
    `${recipe.emoji || "🍲"} ${recipe.name}`,
    recipe.english && recipe.english !== recipe.name ? recipe.english : null,
    `⏱ ${recipe.time} · 👥 Serves ${recipe.serves} · ${recipe.difficulty}`,
    "",
    recipe.description,
    "",
    "INGREDIENTS · ENGREDYAN",
    ...recipe.ingredients.map((i) => `• ${i.item}`),
    "",
    "STEPS · PREPARASYON",
    ...recipe.steps.map((s, n) => `${n + 1}. ${s}`),
    "",
    "Shared from Kwizin Lakay 🇭🇹 — Haitian Recipe Finder"
  ];
  return lines.filter((l) => l !== null).join("\n");
}

// Split text into lines that fit maxWidth with the context's current font.
function wrapText(ctx, text, maxWidth) {
  const words = String(text).split(/\s+/).filter(Boolean);
  const lines = [];
  let line = "";
  words.forEach((word) => {
    const test = line ? `${line} ${word}` : word;
    if (ctx.measureText(test).width <= maxWidth || !line) {
      line = test;
    } else {
      lines.push(line);
      line = word;
    }
  });
  if (line) lines.push(line);
  return lines;
}

// Draw the card. Runs twice: once to measure height (draw=false), once to paint.
function layoutCard(ctx, recipe, draw) {
  const { width, pad } = CARD;
  const inner = width - pad * 2;
  let y = 0;

  const text = (str, x, font, color, align = "left") => {
    if (!draw) return;
    ctx.font = font;
    ctx.fillStyle = color;
    ctx.textAlign = align;
    ctx.fillText(str, x, y);
  };

  // Header band with flag stripe
  const headerH = 290;
  if (draw) {
    const g = ctx.createLinearGradient(0, 0, width, headerH);
    g.addColorStop(0, CARD.blue);
    g.addColorStop(1, "#001a7f");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, width, headerH);
    ctx.fillStyle = CARD.blue;
    ctx.fillRect(0, headerH, width / 2, 14);
    ctx.fillStyle = CARD.red;
    ctx.fillRect(width / 2, headerH, width / 2, 14);
  }
  ctx.textBaseline = "alphabetic";
  y = 58;
  text("🇭🇹  KWIZIN LAKAY · RECIPE CARD", pad, `800 26px ${CARD.sans}`, CARD.gold);

  // Emoji + title (title may wrap)
  ctx.font = `800 64px ${CARD.serif}`;
  const titleLines = wrapText(ctx, recipe.name, inner - 130).slice(0, 2);
  y = 178;
  text(recipe.emoji || "🍲", pad, `96px ${CARD.sans}`, "#fff");
  titleLines.forEach((l, i) => {
    y = 178 + i * 70;
    text(l, pad + 130, `800 64px ${CARD.serif}`, "#fff");
  });
  if (recipe.english && recipe.english !== recipe.name) {
    y += 52;
    ctx.font = `600 34px ${CARD.sans}`;
    text(wrapText(ctx, recipe.english, inner - 130)[0], pad + 130, `600 34px ${CARD.sans}`, "#dfe6ff");
  }
  y = Math.max(y + 40, headerH) + 14;

  // Meta pills
  y += 70;
  const meta = [`⏱ ${recipe.time}`, `👥 Serves ${recipe.serves}`, recipe.difficulty];
  let x = pad;
  ctx.font = `800 28px ${CARD.sans}`;
  meta.forEach((m) => {
    const w = ctx.measureText(m).width + 44;
    if (draw) {
      ctx.fillStyle = "#fff";
      ctx.strokeStyle = "#e3e0d6";
      ctx.lineWidth = 2;
      roundRect(ctx, x, y - 40, w, 56, 28);
      ctx.fill();
      ctx.stroke();
    }
    text(m, x + 22, `800 28px ${CARD.sans}`, CARD.blue);
    x += w + 16;
  });
  y += 30;

  // Description
  if (recipe.description) {
    ctx.font = `italic 400 30px ${CARD.sans}`;
    wrapText(ctx, recipe.description, inner).forEach((l) => {
      y += 44;
      text(l, pad, `italic 400 30px ${CARD.sans}`, CARD.inkSoft);
    });
  }

  const section = (title) => {
    y += 80;
    text(title, pad, `800 40px ${CARD.serif}`, CARD.red);
    y += 18;
    if (draw) {
      ctx.fillStyle = CARD.gold;
      ctx.fillRect(pad, y, inner, 4);
    }
    y += 12;
  };

  // Ingredients
  section("Engredyan · Ingredients");
  ctx.font = `600 30px ${CARD.sans}`;
  recipe.ingredients.forEach((ing) => {
    wrapText(ctx, ing.item, inner - 44).forEach((l, i) => {
      y += 44;
      if (i === 0) text("•", pad + 6, `800 30px ${CARD.sans}`, CARD.red);
      text(l, pad + 44, `600 30px ${CARD.sans}`, CARD.ink);
    });
    y += 4;
  });

  // Steps
  section("Preparasyon · Steps");
  recipe.steps.forEach((step, n) => {
    y += 20;
    ctx.font = `400 30px ${CARD.sans}`;
    const lines = wrapText(ctx, step, inner - 70);
    if (draw) {
      ctx.fillStyle = CARD.blue;
      ctx.beginPath();
      ctx.arc(pad + 22, y + 34, 22, 0, Math.PI * 2);
      ctx.fill();
    }
    y += 44;
    text(String(n + 1), pad + 22, `800 24px ${CARD.sans}`, "#fff", "center");
    lines.forEach((l, i) => {
      if (i > 0) y += 44;
      text(l, pad + 70, `400 30px ${CARD.sans}`, CARD.ink);
    });
  });

  // Footer
  y += 70;
  const footerTop = y;
  const footerH = 110;
  if (draw) {
    ctx.fillStyle = CARD.blue;
    ctx.fillRect(0, footerTop, width / 2, 10);
    ctx.fillStyle = CARD.red;
    ctx.fillRect(width / 2, footerTop, width / 2, 10);
    ctx.fillStyle = CARD.blue;
    ctx.fillRect(0, footerTop + 10, width, footerH);
  }
  y = footerTop + 10 + 66;
  text("Bon apeti! · Shared from Kwizin Lakay 🇭🇹", width / 2, `800 30px ${CARD.sans}`, "#dfe6ff", "center");
  return footerTop + 10 + footerH;
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

async function renderRecipeCard(recipe) {
  // Make sure the web fonts are ready so the card doesn't fall back to defaults.
  if (document.fonts && document.fonts.load) {
    await Promise.all([
      document.fonts.load(`800 64px "Fraunces"`),
      document.fonts.load(`600 30px "Nunito"`),
      document.fonts.load(`800 30px "Nunito"`),
      document.fonts.load(`400 30px "Nunito"`),
      document.fonts.load(`italic 400 30px "Nunito"`)
    ]).catch(() => {});
  }
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = CARD.width;
  canvas.height = 100;
  const height = layoutCard(ctx, recipe, false);
  canvas.height = Math.ceil(height);
  ctx.fillStyle = CARD.cream;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  layoutCard(ctx, recipe, true);
  return canvas;
}

function canvasToBlob(canvas) {
  return new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
}

function cardFileName(recipe) {
  const slug = normalize(recipe.name).replace(/\s+/g, "-") || "recipe";
  return `${slug}-recipe-card.png`;
}

// ---------- Share panel UI ----------
async function openSharePanel(recipe) {
  const panel = document.getElementById("share-panel");
  const preview = document.getElementById("share-preview");
  const status = document.getElementById("share-status");
  panel.classList.remove("hidden");
  status.textContent = "Preparing your recipe card…";
  preview.innerHTML = "";

  const canvas = await renderRecipeCard(recipe);
  const blob = await canvasToBlob(canvas);
  const file = new File([blob], cardFileName(recipe), { type: "image/png" });
  const url = URL.createObjectURL(blob);
  const img = document.createElement("img");
  img.src = url;
  img.alt = `Recipe card for ${recipe.name}`;
  preview.appendChild(img);
  status.textContent = "";

  const text = recipeToText(recipe);
  const subject = `Recipe: ${recipe.name}${recipe.english && recipe.english !== recipe.name ? ` (${recipe.english})` : ""}`;
  const canShareFile = !!(navigator.canShare && navigator.canShare({ files: [file] }));

  const shareBtn = document.getElementById("share-native-btn");
  shareBtn.classList.toggle("hidden", !canShareFile && !navigator.share);
  shareBtn.onclick = async () => {
    try {
      if (canShareFile) {
        await navigator.share({ files: [file], title: subject, text: `${recipe.emoji || "🍲"} ${subject} — from Kwizin Lakay 🇭🇹` });
      } else {
        await navigator.share({ title: subject, text });
      }
    } catch (err) {
      if (err && err.name !== "AbortError") status.textContent = "Sharing didn't work here — try Download or Copy text instead.";
    }
  };

  document.getElementById("share-email-btn").onclick = () => {
    // mailto: can't carry attachments, so send the full recipe as text.
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
  };

  document.getElementById("share-download-btn").onclick = () => {
    const a = document.createElement("a");
    a.href = url;
    a.download = file.name;
    document.body.appendChild(a);
    a.click();
    a.remove();
    status.textContent = "Card saved — attach it to an email or Messenger chat. 📎";
  };

  document.getElementById("share-copy-btn").onclick = async () => {
    try {
      await navigator.clipboard.writeText(text);
      status.textContent = "Recipe copied! Paste it into any message. 📋";
    } catch {
      status.textContent = "Couldn't copy automatically on this device.";
    }
  };

  document.getElementById("share-close-btn").onclick = () => closeSharePanel();
  panel.dataset.url = url;
}

function closeSharePanel() {
  const panel = document.getElementById("share-panel");
  if (!panel || panel.classList.contains("hidden")) return;
  panel.classList.add("hidden");
  if (panel.dataset.url) URL.revokeObjectURL(panel.dataset.url);
  delete panel.dataset.url;
  document.getElementById("share-preview").innerHTML = "";
}
