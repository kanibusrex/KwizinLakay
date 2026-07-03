// Database of Haitian dishes.
// Each ingredient has a display name ("item") and a canonical matching key ("key").
// "essential" marks the ingredients that define the dish for match scoring.

const RECIPES = [
  {
    id: "soup-joumou",
    name: "Soup Joumou",
    english: "Freedom Squash Soup",
    category: "soup",
    emoji: "🎃",
    time: "2 hrs",
    difficulty: "Medium",
    serves: 8,
    description:
      "Haiti's beloved Independence Day soup, eaten every January 1st to celebrate freedom from slavery in 1804. A rich, silky squash soup loaded with beef, pasta, and vegetables. Recognized by UNESCO as a cultural heritage treasure.",
    ingredients: [
      { item: "2 lbs kabocha or butternut squash (joumou)", key: "squash", essential: true },
      { item: "1 lb beef stew meat", key: "beef", essential: true },
      { item: "2 tbsp epis (Haitian seasoning base)", key: "epis", essential: false },
      { item: "2 carrots, sliced", key: "carrot", essential: false },
      { item: "2 potatoes, cubed", key: "potato", essential: false },
      { item: "1 cup cabbage, chopped", key: "cabbage", essential: false },
      { item: "1 celery stalk", key: "celery", essential: false },
      { item: "1 onion, chopped", key: "onion", essential: false },
      { item: "1/2 cup rigatoni or macaroni", key: "pasta", essential: false },
      { item: "1 scotch bonnet pepper (whole)", key: "scotch bonnet", essential: false },
      { item: "Juice of 1 lime", key: "lime", essential: false },
      { item: "2 sprigs thyme & parsley", key: "thyme", essential: false }
    ],
    steps: [
      "Clean the beef with lime juice, then season with epis and marinate at least 1 hour (overnight is best).",
      "Brown the beef in a large pot, then add water and simmer until tender, about 45 minutes.",
      "Meanwhile, boil the squash until soft and blend it with some broth into a smooth purée.",
      "Add the squash purée to the pot with the beef and broth.",
      "Add carrots, potatoes, cabbage, celery, onion, thyme, and the whole scotch bonnet.",
      "Simmer 20 minutes, then add pasta and cook until tender.",
      "Remove the scotch bonnet before serving. Taste and adjust salt. Serve hot with bread."
    ]
  },
  {
    id: "griot",
    name: "Griot",
    english: "Crispy Fried Pork",
    category: "main",
    emoji: "🍖",
    time: "3 hrs",
    difficulty: "Medium",
    serves: 6,
    description:
      "Haiti's national dish of celebration: pork shoulder marinated in citrus and epis, braised until tender, then fried until golden and crispy. Always served with pikliz and fried plantains.",
    ingredients: [
      { item: "3 lbs pork shoulder, cubed", key: "pork", essential: true },
      { item: "1 sour orange (or orange + lime)", key: "orange", essential: true },
      { item: "3 tbsp epis", key: "epis", essential: false },
      { item: "1 onion, sliced", key: "onion", essential: false },
      { item: "3 cloves garlic", key: "garlic", essential: false },
      { item: "1 scotch bonnet pepper", key: "scotch bonnet", essential: false },
      { item: "2 sprigs thyme", key: "thyme", essential: false },
      { item: "Oil for frying", key: "oil", essential: true },
      { item: "Salt & pepper", key: "salt", essential: false }
    ],
    steps: [
      "Clean the pork with sour orange juice, rubbing well. Do not rinse off completely.",
      "Season with epis, garlic, onion, thyme, scotch bonnet, salt, and pepper. Marinate at least 2 hours or overnight.",
      "Put the pork and marinade in a pot with a little water. Braise covered until tender, 45–60 minutes.",
      "Remove the pork pieces and let them dry a little.",
      "Fry the pork in hot oil until golden brown and crispy on the outside.",
      "Serve hot with pikliz, banann peze (fried plantains), and rice."
    ]
  },
  {
    id: "diri-djon-djon",
    name: "Diri ak Djon Djon",
    english: "Black Mushroom Rice",
    category: "main",
    emoji: "🍚",
    time: "50 min",
    difficulty: "Medium",
    serves: 6,
    description:
      "An iconic dish from northern Haiti: rice cooked in the inky, earthy broth of djon djon mushrooms, often with lima beans and shrimp. Deeply aromatic and reserved for special occasions.",
    ingredients: [
      { item: "2 cups long grain rice", key: "rice", essential: true },
      { item: "1 cup dried djon djon mushrooms", key: "djon djon", essential: true },
      { item: "1 cup lima beans (optional)", key: "lima beans", essential: false },
      { item: "1/2 lb shrimp (optional)", key: "shrimp", essential: false },
      { item: "2 tbsp epis", key: "epis", essential: false },
      { item: "2 cloves garlic", key: "garlic", essential: false },
      { item: "1 scotch bonnet pepper", key: "scotch bonnet", essential: false },
      { item: "2 tbsp oil", key: "oil", essential: false },
      { item: "2 sprigs thyme", key: "thyme", essential: false }
    ],
    steps: [
      "Soak the djon djon mushrooms in 3 cups of hot water for 20 minutes, then strain, keeping the black liquid and discarding the stems.",
      "Sauté epis, garlic, and thyme in oil. Add shrimp and lima beans if using.",
      "Pour in the djon djon liquid and bring to a boil. Season with salt.",
      "Add the rice, stir once, and place the whole scotch bonnet on top.",
      "Cover and cook on low until the rice absorbs all the liquid, about 20 minutes.",
      "Fluff and serve — the rice should be a deep gray-black color with an earthy aroma."
    ]
  },
  {
    id: "diri-kole",
    name: "Diri Kole ak Pwa",
    english: "Rice & Beans",
    category: "main",
    emoji: "🫘",
    time: "1 hr",
    difficulty: "Easy",
    serves: 6,
    description:
      "The everyday heart of Haitian cooking — rice and red beans cooked together in seasoned bean broth with coconut or epis. Served alongside nearly every Haitian meal.",
    ingredients: [
      { item: "2 cups rice", key: "rice", essential: true },
      { item: "1 cup dried red kidney beans", key: "beans", essential: true },
      { item: "2 tbsp epis", key: "epis", essential: false },
      { item: "2 cloves garlic, crushed", key: "garlic", essential: false },
      { item: "3 tbsp oil", key: "oil", essential: false },
      { item: "1 scotch bonnet pepper", key: "scotch bonnet", essential: false },
      { item: "2 sprigs thyme", key: "thyme", essential: false },
      { item: "1 tbsp butter or coconut milk (optional)", key: "coconut milk", essential: false },
      { item: "Salt to taste", key: "salt", essential: false }
    ],
    steps: [
      "Boil the beans in water until tender, about 45 minutes (or use canned). Reserve the cooking liquid.",
      "In a pot, sauté the epis, garlic, and thyme in oil. Add the beans and fry 2 minutes.",
      "Add 4 cups of the bean liquid (top up with water). Season with salt and bring to a boil.",
      "Add rice, stir once, and lay the scotch bonnet on top.",
      "Cover and simmer on low until the liquid is absorbed, about 20 minutes.",
      "Fluff with a fork and serve with any meat or legim."
    ]
  },
  {
    id: "legim",
    name: "Legim",
    english: "Braised Vegetable Stew",
    category: "main",
    emoji: "🍆",
    time: "1.5 hrs",
    difficulty: "Medium",
    serves: 6,
    description:
      "A thick, hearty mash of eggplant, cabbage, chayote, and carrots braised down with beef or crab. Deeply savory comfort food, always served over white rice.",
    ingredients: [
      { item: "1 lb beef stew meat (or crab)", key: "beef", essential: false },
      { item: "2 eggplants, cubed", key: "eggplant", essential: true },
      { item: "1/2 cabbage, chopped", key: "cabbage", essential: true },
      { item: "2 chayote (mirliton), cubed", key: "chayote", essential: false },
      { item: "2 carrots, sliced", key: "carrot", essential: false },
      { item: "1 cup spinach or watercress", key: "spinach", essential: false },
      { item: "2 tbsp epis", key: "epis", essential: false },
      { item: "2 tbsp tomato paste", key: "tomato paste", essential: false },
      { item: "1 onion", key: "onion", essential: false },
      { item: "1 scotch bonnet pepper", key: "scotch bonnet", essential: false },
      { item: "3 tbsp oil", key: "oil", essential: false }
    ],
    steps: [
      "Season the beef with epis and brown it in oil. Add a little water and braise until tender.",
      "Boil the eggplant, cabbage, chayote, and carrots until very soft.",
      "Drain and mash the vegetables together roughly.",
      "Add the mashed vegetables to the beef with tomato paste, onion, and scotch bonnet.",
      "Simmer low and slow, stirring, until thick and dark, about 30 minutes. Add spinach near the end.",
      "Serve hot over white rice or diri kole."
    ]
  },
  {
    id: "tassot",
    name: "Tasso Kabrit",
    english: "Fried Goat (Tassot)",
    category: "main",
    emoji: "🐐",
    time: "2.5 hrs",
    difficulty: "Medium",
    serves: 6,
    description:
      "Goat meat marinated in citrus, boiled tender, then fried into crispy, chewy golden pieces. Griot's cousin — a street food and party favorite served with pikliz.",
    ingredients: [
      { item: "2 lbs goat meat (or beef), cubed", key: "goat", essential: true },
      { item: "1 sour orange or 2 limes", key: "lime", essential: true },
      { item: "2 tbsp epis", key: "epis", essential: false },
      { item: "1 onion", key: "onion", essential: false },
      { item: "3 cloves garlic", key: "garlic", essential: false },
      { item: "1 scotch bonnet pepper", key: "scotch bonnet", essential: false },
      { item: "Oil for frying", key: "oil", essential: true },
      { item: "Salt & pepper", key: "salt", essential: false }
    ],
    steps: [
      "Clean the goat meat with lime or sour orange juice.",
      "Season with epis, garlic, onion, scotch bonnet, salt, and pepper. Marinate 2+ hours.",
      "Simmer the meat in its marinade with water until tender, about 1 hour.",
      "Drain the meat and pat dry.",
      "Fry in hot oil until deep golden and crispy at the edges.",
      "Serve with pikliz, fried plantains, and diri kole."
    ]
  },
  {
    id: "poul-an-sos",
    name: "Poul an Sòs",
    english: "Chicken in Creole Sauce",
    category: "main",
    emoji: "🍗",
    time: "1.5 hrs",
    difficulty: "Easy",
    serves: 6,
    description:
      "Chicken stewed in a bright Creole sauce of tomatoes, onions, and peppers. A Sunday-dinner staple that fills the whole house with the smell of epis.",
    ingredients: [
      { item: "1 whole chicken, cut up (or thighs)", key: "chicken", essential: true },
      { item: "3 tbsp epis", key: "epis", essential: false },
      { item: "2 limes", key: "lime", essential: false },
      { item: "2 tomatoes, sliced", key: "tomato", essential: true },
      { item: "2 tbsp tomato paste", key: "tomato paste", essential: false },
      { item: "1 onion, sliced", key: "onion", essential: false },
      { item: "1 bell pepper, sliced", key: "bell pepper", essential: false },
      { item: "1 scotch bonnet pepper", key: "scotch bonnet", essential: false },
      { item: "3 tbsp oil", key: "oil", essential: false },
      { item: "2 sprigs thyme", key: "thyme", essential: false }
    ],
    steps: [
      "Clean the chicken with lime juice, then season with epis and marinate 1 hour or more.",
      "Brown the chicken in hot oil on all sides, then remove.",
      "In the same pot, sauté onion, bell pepper, tomato paste, and tomatoes.",
      "Return the chicken with a cup of water, thyme, and the whole scotch bonnet.",
      "Cover and simmer until the chicken is cooked through and the sauce thickens, about 30 minutes.",
      "Serve over white rice or with boiled plantains."
    ]
  },
  {
    id: "pikliz",
    name: "Pikliz",
    english: "Spicy Pickled Slaw",
    category: "side",
    emoji: "🌶️",
    time: "15 min + 2 days",
    difficulty: "Easy",
    serves: 12,
    description:
      "The fiery soul of the Haitian table: cabbage, carrots, and scotch bonnet pickled in vinegar. A spoonful cuts through any fried food. No griot is complete without it.",
    ingredients: [
      { item: "1/2 head cabbage, shredded", key: "cabbage", essential: true },
      { item: "2 carrots, grated", key: "carrot", essential: true },
      { item: "1/2 onion, thinly sliced", key: "onion", essential: false },
      { item: "3–6 scotch bonnet peppers, sliced", key: "scotch bonnet", essential: true },
      { item: "1 bell pepper, sliced (optional)", key: "bell pepper", essential: false },
      { item: "2 cups white vinegar", key: "vinegar", essential: true },
      { item: "Juice of 1 lime", key: "lime", essential: false },
      { item: "1 tsp salt", key: "salt", essential: false },
      { item: "4 whole cloves (optional)", key: "cloves", essential: false }
    ],
    steps: [
      "Toss the cabbage, carrots, onion, and peppers together with the salt.",
      "Pack the mixture tightly into a clean glass jar.",
      "Pour in vinegar and lime juice until everything is covered.",
      "Seal and let sit at room temperature or in the fridge for at least 2 days.",
      "Serve cold with griot, tassot, bannann peze, or anything fried. Keeps for weeks in the fridge."
    ]
  },
  {
    id: "bannann-peze",
    name: "Bannann Peze",
    english: "Twice-Fried Plantains",
    category: "side",
    emoji: "🍌",
    time: "20 min",
    difficulty: "Easy",
    serves: 4,
    description:
      "Green plantains fried, smashed flat, and fried again until golden and crisp. The essential partner to griot and pikliz.",
    ingredients: [
      { item: "3 green plantains", key: "plantain", essential: true },
      { item: "Oil for frying", key: "oil", essential: true },
      { item: "Salt", key: "salt", essential: false },
      { item: "1 lime (optional, for soaking)", key: "lime", essential: false }
    ],
    steps: [
      "Peel the plantains and cut into 1-inch thick rounds.",
      "Fry in hot oil for 2–3 minutes per side until lightly golden. Remove.",
      "Smash each piece flat with the bottom of a glass or a tostonera.",
      "Dip briefly in salted water (optional), then fry again until crisp and golden.",
      "Drain, sprinkle with salt, and serve hot with pikliz."
    ]
  },
  {
    id: "mayi-moulen",
    name: "Mayi Moulen ak Sòs Pwa",
    english: "Cornmeal with Bean Sauce",
    category: "main",
    emoji: "🌽",
    time: "45 min",
    difficulty: "Easy",
    serves: 4,
    description:
      "Creamy cooked cornmeal — Haiti's polenta — served with a silky black or red bean sauce. Humble, filling, and beloved, often with avocado on the side.",
    ingredients: [
      { item: "2 cups coarse cornmeal", key: "cornmeal", essential: true },
      { item: "1 cup beans (black or red)", key: "beans", essential: true },
      { item: "2 tbsp epis", key: "epis", essential: false },
      { item: "2 cloves garlic", key: "garlic", essential: false },
      { item: "1/2 cup coconut milk (optional)", key: "coconut milk", essential: false },
      { item: "3 tbsp oil", key: "oil", essential: false },
      { item: "2 sprigs thyme & parsley", key: "thyme", essential: false },
      { item: "1 avocado, to serve", key: "avocado", essential: false }
    ],
    steps: [
      "For the sauce: cook the beans until very soft, then blend with their liquid until smooth.",
      "Simmer the blended beans with epis, garlic, thyme, and a spoon of oil until silky. Set aside.",
      "In a pot, sauté a spoon of epis in oil, add 5 cups water (or water + coconut milk) and bring to a boil.",
      "Rain in the cornmeal while whisking. Reduce heat to low.",
      "Cook covered, stirring often, until thick and tender, 25–30 minutes.",
      "Serve the mayi moulen in a bowl topped with sòs pwa and sliced avocado."
    ]
  },
  {
    id: "akra",
    name: "Akra",
    english: "Malanga Fritters",
    category: "snack",
    emoji: "🥟",
    time: "40 min",
    difficulty: "Medium",
    serves: 6,
    description:
      "Crispy, lacy fritters made from grated malanga root seasoned with epis and parsley. A classic street snack and party appetizer, best hot from the oil.",
    ingredients: [
      { item: "2 lbs malanga root, peeled", key: "malanga", essential: true },
      { item: "2 tbsp epis", key: "epis", essential: false },
      { item: "2 cloves garlic", key: "garlic", essential: false },
      { item: "1 scotch bonnet pepper, minced", key: "scotch bonnet", essential: false },
      { item: "1/4 cup parsley, chopped", key: "parsley", essential: false },
      { item: "1 egg (optional binder)", key: "egg", essential: false },
      { item: "Oil for frying", key: "oil", essential: true },
      { item: "Salt & pepper", key: "salt", essential: false }
    ],
    steps: [
      "Finely grate the malanga (or pulse in a food processor) into a thick paste.",
      "Mix in epis, garlic, scotch bonnet, parsley, salt, and pepper.",
      "Heat oil to 350°F (175°C).",
      "Drop spoonfuls of the batter into the oil and fry until deep golden and crisp, 4–5 minutes.",
      "Drain on paper towels and serve hot with pikliz."
    ]
  },
  {
    id: "marinad",
    name: "Marinad",
    english: "Savory Fritters",
    category: "snack",
    emoji: "🥞",
    time: "25 min",
    difficulty: "Easy",
    serves: 6,
    description:
      "Fluffy fried dough fritters spiked with epis — sometimes plain, sometimes with shredded chicken or salted cod folded in. The easiest Haitian snack to fall in love with.",
    ingredients: [
      { item: "2 cups flour", key: "flour", essential: true },
      { item: "1 tsp baking powder", key: "baking powder", essential: false },
      { item: "2 tbsp epis", key: "epis", essential: true },
      { item: "1 egg", key: "egg", essential: false },
      { item: "1 scotch bonnet pepper, minced", key: "scotch bonnet", essential: false },
      { item: "1 cup shredded chicken or salted cod (optional)", key: "chicken", essential: false },
      { item: "Oil for frying", key: "oil", essential: true },
      { item: "Salt", key: "salt", essential: false }
    ],
    steps: [
      "Whisk flour, baking powder, and salt together.",
      "Add epis, egg, scotch bonnet, and enough water to make a thick pancake-like batter.",
      "Fold in shredded chicken or cod if using.",
      "Drop spoonfuls into hot oil and fry until puffed and golden, 3–4 minutes.",
      "Drain and eat hot — ideally with pikliz."
    ]
  },
  {
    id: "lambi",
    name: "Lambi an Sòs",
    english: "Stewed Conch",
    category: "main",
    emoji: "🐚",
    time: "2 hrs",
    difficulty: "Hard",
    serves: 4,
    description:
      "Tender conch simmered in a rich Creole tomato sauce — a prized coastal delicacy, often called the taste of the Haitian seaside.",
    ingredients: [
      { item: "2 lbs conch (lambi), cleaned", key: "conch", essential: true },
      { item: "2 limes", key: "lime", essential: false },
      { item: "3 tbsp epis", key: "epis", essential: false },
      { item: "2 tomatoes", key: "tomato", essential: false },
      { item: "2 tbsp tomato paste", key: "tomato paste", essential: false },
      { item: "1 onion", key: "onion", essential: false },
      { item: "1 bell pepper", key: "bell pepper", essential: false },
      { item: "1 scotch bonnet pepper", key: "scotch bonnet", essential: false },
      { item: "3 tbsp oil", key: "oil", essential: false }
    ],
    steps: [
      "Clean the conch with lime, then pound it to tenderize.",
      "Pressure cook or boil the conch until tender, 45–60 minutes.",
      "Season with epis and let marinate 30 minutes.",
      "Sauté onion, bell pepper, tomato paste, and tomatoes in oil.",
      "Add the conch and a little of its broth; simmer with the scotch bonnet until the sauce is rich, about 20 minutes.",
      "Serve with white rice, diri djon djon, or boiled plantains."
    ]
  },
  {
    id: "pwason-gwo-sel",
    name: "Pwason Gwo Sèl",
    english: "Fish in Lime & Sea Salt Broth",
    category: "main",
    emoji: "🐟",
    time: "45 min",
    difficulty: "Easy",
    serves: 4,
    description:
      "Whole fish gently poached with lime, coarse sea salt, peppers, and herbs. Clean, bright, and simple — a beachside classic served with boiled plantains.",
    ingredients: [
      { item: "2 whole red snapper or fish fillets", key: "fish", essential: true },
      { item: "2 limes", key: "lime", essential: true },
      { item: "1 tbsp coarse sea salt", key: "salt", essential: false },
      { item: "2 tbsp epis", key: "epis", essential: false },
      { item: "1 onion, sliced", key: "onion", essential: false },
      { item: "1 bell pepper, sliced", key: "bell pepper", essential: false },
      { item: "1 scotch bonnet pepper", key: "scotch bonnet", essential: false },
      { item: "2 sprigs thyme", key: "thyme", essential: false },
      { item: "3 green plantains (to serve)", key: "plantain", essential: false }
    ],
    steps: [
      "Clean the fish thoroughly with lime juice.",
      "Season with epis, salt, and lime; marinate 30 minutes.",
      "Lay the fish in a wide pan with onion, bell pepper, thyme, and scotch bonnet.",
      "Add about 1 cup of water, cover, and poach gently 15–20 minutes.",
      "Meanwhile, boil the plantains until tender.",
      "Serve the fish in its light broth with the boiled plantains."
    ]
  },
  {
    id: "bouyon",
    name: "Bouyon Bèf",
    english: "Hearty Beef Dumpling Soup",
    category: "soup",
    emoji: "🍲",
    time: "2 hrs",
    difficulty: "Medium",
    serves: 8,
    description:
      "A thick Saturday-night soup of beef, root vegetables, plantains, and flour dumplings (bòy). A whole meal in a bowl.",
    ingredients: [
      { item: "1.5 lbs beef stew meat", key: "beef", essential: true },
      { item: "2 green plantains, chunked", key: "plantain", essential: false },
      { item: "1 lb yam or malanga, cubed", key: "yam", essential: false },
      { item: "2 potatoes", key: "potato", essential: false },
      { item: "2 carrots", key: "carrot", essential: false },
      { item: "1 cup spinach or watercress", key: "spinach", essential: false },
      { item: "1 cup flour (for dumplings)", key: "flour", essential: true },
      { item: "2 tbsp epis", key: "epis", essential: false },
      { item: "1 scotch bonnet pepper", key: "scotch bonnet", essential: false },
      { item: "1 lime", key: "lime", essential: false }
    ],
    steps: [
      "Clean the beef with lime, season with epis, and marinate 1 hour.",
      "Brown the beef, add water, and simmer until nearly tender, about 45 minutes.",
      "Add plantains, yam, potatoes, and carrots.",
      "Make the bòy: knead flour with a pinch of salt and water into a stiff dough; roll into small logs.",
      "Drop the dumplings into the soup with the scotch bonnet and simmer 20 minutes.",
      "Stir in the greens at the end and serve piping hot."
    ]
  },
  {
    id: "makawoni-graten",
    name: "Makawoni au Graten",
    english: "Haitian Baked Macaroni",
    category: "side",
    emoji: "🧀",
    time: "1 hr",
    difficulty: "Easy",
    serves: 8,
    description:
      "Haiti's take on baked mac and cheese: rigatoni with evaporated milk, mayonnaise, cheese, and peppers, baked until golden. A holiday and party essential.",
    ingredients: [
      { item: "1 lb rigatoni or macaroni", key: "pasta", essential: true },
      { item: "1 can evaporated milk", key: "milk", essential: true },
      { item: "1/2 cup mayonnaise", key: "mayonnaise", essential: false },
      { item: "2 cups shredded cheddar & parmesan", key: "cheese", essential: true },
      { item: "1 onion, minced", key: "onion", essential: false },
      { item: "1 bell pepper, minced", key: "bell pepper", essential: false },
      { item: "2 tbsp butter", key: "butter", essential: false },
      { item: "2 tbsp epis", key: "epis", essential: false },
      { item: "1 pinch scotch bonnet, minced (optional)", key: "scotch bonnet", essential: false }
    ],
    steps: [
      "Boil the pasta until just al dente; drain.",
      "Sauté onion, bell pepper, and epis in butter.",
      "Mix the pasta with evaporated milk, mayonnaise, sautéed vegetables, and most of the cheese.",
      "Pour into a buttered baking dish and top with the remaining cheese.",
      "Bake at 375°F (190°C) until golden and set, 30–35 minutes.",
      "Let rest 10 minutes, slice into squares, and serve."
    ]
  },
  {
    id: "espageti",
    name: "Espageti",
    english: "Haitian Breakfast Spaghetti",
    category: "breakfast",
    emoji: "🍝",
    time: "30 min",
    difficulty: "Easy",
    serves: 4,
    description:
      "Yes — spaghetti for breakfast! Fried with hot dogs or dried herring, epis, and ketchup. A quirky, comforting Haitian morning tradition.",
    ingredients: [
      { item: "1 lb spaghetti", key: "pasta", essential: true },
      { item: "4 hot dogs, sliced (or dried herring)", key: "hot dog", essential: true },
      { item: "2 tbsp epis", key: "epis", essential: false },
      { item: "2 tbsp tomato paste or ketchup", key: "tomato paste", essential: false },
      { item: "1 onion, sliced", key: "onion", essential: false },
      { item: "1 bell pepper", key: "bell pepper", essential: false },
      { item: "3 tbsp oil", key: "oil", essential: false },
      { item: "1 avocado, to serve", key: "avocado", essential: false }
    ],
    steps: [
      "Boil the spaghetti until al dente; drain, saving a splash of pasta water.",
      "Sauté the hot dogs in oil until browned.",
      "Add epis, onion, bell pepper, and tomato paste; cook 3 minutes.",
      "Toss in the spaghetti with a splash of pasta water and fry everything together 5 minutes.",
      "Serve hot with sliced avocado and bread — Haitian breakfast style."
    ]
  },
  {
    id: "salad-avoka",
    name: "Salad Avoka",
    english: "Avocado & Watercress Salad",
    category: "side",
    emoji: "🥑",
    time: "10 min",
    difficulty: "Easy",
    serves: 4,
    description:
      "Cool, creamy avocado with watercress, onion, and a lime vinaigrette — the fresh counterpoint on a plate of rice and stewed meat.",
    ingredients: [
      { item: "2 ripe avocados", key: "avocado", essential: true },
      { item: "1 bunch watercress (or lettuce)", key: "watercress", essential: false },
      { item: "1 tomato, sliced", key: "tomato", essential: false },
      { item: "1/4 onion, thinly sliced", key: "onion", essential: false },
      { item: "Juice of 1 lime", key: "lime", essential: true },
      { item: "2 tbsp olive oil", key: "oil", essential: false },
      { item: "Salt & pepper", key: "salt", essential: false }
    ],
    steps: [
      "Wash and trim the watercress; arrange on a platter.",
      "Slice the avocados and tomato and arrange on top with the onion.",
      "Whisk lime juice, oil, salt, and pepper into a quick vinaigrette.",
      "Drizzle over the salad and serve immediately alongside any rice dish."
    ]
  },
  {
    id: "akasan",
    name: "Akasan",
    english: "Spiced Corn Flour Drink",
    category: "drink",
    emoji: "🥛",
    time: "30 min",
    difficulty: "Easy",
    serves: 4,
    description:
      "A thick, warming corn flour drink simmered with cinnamon, star anise, and vanilla, finished with sweet milk. Breakfast in a mug.",
    ingredients: [
      { item: "1 cup fine corn flour", key: "cornmeal", essential: true },
      { item: "1 can evaporated milk", key: "milk", essential: true },
      { item: "2 cinnamon sticks", key: "cinnamon", essential: true },
      { item: "2 star anise", key: "star anise", essential: false },
      { item: "1 tsp vanilla", key: "vanilla", essential: false },
      { item: "1/2 cup sugar (to taste)", key: "sugar", essential: false },
      { item: "1 pinch salt", key: "salt", essential: false },
      { item: "Zest of 1 lime", key: "lime", essential: false }
    ],
    steps: [
      "Whisk the corn flour into 2 cups of cold water and let sit 10 minutes.",
      "Boil 3 cups of water with cinnamon, star anise, lime zest, and salt.",
      "Strain the corn flour mixture into the pot, whisking constantly.",
      "Simmer on low, stirring, until thickened, 15–20 minutes.",
      "Stir in evaporated milk, sugar, and vanilla.",
      "Serve warm in mugs, or chilled over ice."
    ]
  },
  {
    id: "chokola-ayisyen",
    name: "Chokola Ayisyen",
    english: "Haitian Hot Chocolate",
    category: "drink",
    emoji: "☕",
    time: "20 min",
    difficulty: "Easy",
    serves: 4,
    description:
      "Rich hot chocolate made from raw cacao balls with cinnamon, star anise, and creamy milk. A Sunday-morning ritual with bread and butter.",
    ingredients: [
      { item: "2 Haitian cacao balls (or 4 oz dark chocolate)", key: "chocolate", essential: true },
      { item: "1 can evaporated milk", key: "milk", essential: true },
      { item: "2 cinnamon sticks", key: "cinnamon", essential: true },
      { item: "1 star anise", key: "star anise", essential: false },
      { item: "1 tsp vanilla", key: "vanilla", essential: false },
      { item: "Sugar to taste", key: "sugar", essential: false },
      { item: "1 pinch salt", key: "salt", essential: false },
      { item: "Zest of 1 lime (optional)", key: "lime", essential: false }
    ],
    steps: [
      "Boil 3 cups of water with cinnamon, star anise, and lime zest.",
      "Grate or chop the chocolate and whisk it into the pot until melted.",
      "Simmer 5 minutes to deepen the flavor.",
      "Stir in evaporated milk, vanilla, sugar, and a pinch of salt.",
      "Bring just back to a simmer, whisk until frothy, and serve with buttered bread for dipping."
    ]
  },
  {
    id: "pen-patat",
    name: "Pen Patat",
    english: "Sweet Potato Pudding Cake",
    category: "dessert",
    emoji: "🍠",
    time: "1.5 hrs",
    difficulty: "Medium",
    serves: 8,
    description:
      "A dense, spiced pudding-cake of grated sweet potato, banana, coconut milk, and warm spices. Haiti's favorite holiday dessert.",
    ingredients: [
      { item: "2 lbs white sweet potatoes (batata), grated", key: "sweet potato", essential: true },
      { item: "2 ripe bananas, mashed", key: "banana", essential: true },
      { item: "1 can coconut milk", key: "coconut milk", essential: true },
      { item: "1 can evaporated milk", key: "milk", essential: false },
      { item: "1/2 cup brown sugar", key: "sugar", essential: false },
      { item: "4 tbsp butter, melted", key: "butter", essential: false },
      { item: "1 tsp cinnamon", key: "cinnamon", essential: false },
      { item: "1/2 tsp nutmeg & ginger", key: "nutmeg", essential: false },
      { item: "1 tsp vanilla", key: "vanilla", essential: false },
      { item: "1/2 cup raisins (optional)", key: "raisins", essential: false }
    ],
    steps: [
      "Grate the sweet potatoes finely (a food processor helps).",
      "Mix with mashed bananas, coconut milk, evaporated milk, sugar, butter, spices, and vanilla.",
      "Fold in raisins if using. The batter should be a thick pour.",
      "Pour into a buttered baking dish.",
      "Bake at 350°F (175°C) for about 60–75 minutes until set and deep brown on top.",
      "Cool completely — it firms as it cools. Serve in squares, plain or with a dab of butter."
    ]
  },
  {
    id: "dous-makos",
    name: "Dous Makòs",
    english: "Layered Milk Fudge",
    category: "dessert",
    emoji: "🍬",
    time: "1.5 hrs",
    difficulty: "Hard",
    serves: 12,
    description:
      "The famous striped milk fudge from Petit-Goâve — layers of vanilla, chocolate, and pink-tinted creamy fudge. Sweet, dense, and iconic.",
    ingredients: [
      { item: "2 cans evaporated milk", key: "milk", essential: true },
      { item: "3 cups sugar", key: "sugar", essential: true },
      { item: "1/2 cup butter", key: "butter", essential: false },
      { item: "1 tsp vanilla", key: "vanilla", essential: false },
      { item: "2 tbsp cocoa powder", key: "chocolate", essential: false },
      { item: "1 pinch cinnamon & nutmeg", key: "cinnamon", essential: false },
      { item: "Red food coloring (for the pink layer)", key: "food coloring", essential: false },
      { item: "1 pinch salt", key: "salt", essential: false }
    ],
    steps: [
      "Combine milk, sugar, butter, salt, and spices in a heavy pot.",
      "Cook over medium heat, stirring constantly, until thick and fudge-like (soft-ball stage, ~236°F / 113°C).",
      "Divide into three parts: leave one plain, tint one pink, and mix cocoa into the third.",
      "Pour the first layer into a buttered pan and let it set slightly.",
      "Add the second and third layers one at a time.",
      "Cool completely, then slice into thick striped bars."
    ]
  },
  {
    id: "tablet-pistach",
    name: "Tablèt Pistach",
    english: "Peanut Brittle Clusters",
    category: "dessert",
    emoji: "🥜",
    time: "30 min",
    difficulty: "Easy",
    serves: 10,
    description:
      "Crunchy clusters of roasted peanuts in caramelized brown sugar with ginger and cinnamon. Sold on every Haitian street corner — dangerously snackable.",
    ingredients: [
      { item: "2 cups roasted peanuts", key: "peanuts", essential: true },
      { item: "1.5 cups brown sugar", key: "sugar", essential: true },
      { item: "1 tsp grated ginger", key: "ginger", essential: false },
      { item: "1/2 tsp cinnamon", key: "cinnamon", essential: false },
      { item: "1 tsp vanilla", key: "vanilla", essential: false },
      { item: "1 pinch salt", key: "salt", essential: false }
    ],
    steps: [
      "Melt the brown sugar with 1/4 cup water, ginger, cinnamon, and salt in a heavy pan.",
      "Cook, stirring, until it thickens into a dark caramel.",
      "Stir in the peanuts and vanilla, coating them well.",
      "Drop spoonfuls onto parchment or a banana leaf.",
      "Let harden 15 minutes, then pry off and enjoy."
    ]
  },
  {
    id: "diri-olé",
    name: "Diri Olé (Labouyi Diri)",
    english: "Sweet Rice Porridge",
    category: "breakfast",
    emoji: "🥣",
    time: "40 min",
    difficulty: "Easy",
    serves: 4,
    description:
      "Comforting rice porridge simmered with milk, cinnamon, and vanilla. A warm hug for breakfast or a late-night bowl.",
    ingredients: [
      { item: "1 cup rice", key: "rice", essential: true },
      { item: "1 can evaporated milk", key: "milk", essential: true },
      { item: "2 cinnamon sticks", key: "cinnamon", essential: true },
      { item: "1 star anise", key: "star anise", essential: false },
      { item: "1 tsp vanilla", key: "vanilla", essential: false },
      { item: "1/2 cup sugar", key: "sugar", essential: false },
      { item: "1 pinch salt", key: "salt", essential: false },
      { item: "Zest of 1 lime", key: "lime", essential: false }
    ],
    steps: [
      "Boil the rice in 4 cups of water with cinnamon, star anise, lime zest, and salt until very soft.",
      "Stir in the evaporated milk and simmer until creamy, 10 more minutes.",
      "Sweeten with sugar and finish with vanilla.",
      "Serve warm, dusted with ground cinnamon."
    ]
  },
  {
    id: "epis",
    name: "Epis",
    english: "Haitian Seasoning Base",
    category: "side",
    emoji: "🌿",
    time: "15 min",
    difficulty: "Easy",
    serves: 20,
    description:
      "The green heart of every Haitian kitchen: a blended base of peppers, garlic, herbs, and oil used to season meat, rice, beans — everything. Make a jar and keep it in the fridge.",
    ingredients: [
      { item: "2 green bell peppers", key: "bell pepper", essential: true },
      { item: "1 head of garlic, peeled", key: "garlic", essential: true },
      { item: "1 bunch parsley", key: "parsley", essential: true },
      { item: "1 bunch scallions", key: "scallion", essential: true },
      { item: "1 onion", key: "onion", essential: false },
      { item: "10 sprigs thyme", key: "thyme", essential: false },
      { item: "1/2 cup olive oil", key: "oil", essential: false },
      { item: "Juice of 1 lime", key: "lime", essential: false },
      { item: "1 scotch bonnet pepper (optional)", key: "scotch bonnet", essential: false },
      { item: "4 whole cloves", key: "cloves", essential: false }
    ],
    steps: [
      "Roughly chop all the vegetables and herbs.",
      "Add everything to a blender or food processor with the oil and lime juice.",
      "Blend until mostly smooth but still slightly textured.",
      "Store in a glass jar in the fridge (2–3 weeks) or freeze in ice cube trays.",
      "Use 2–3 spoonfuls to season any meat, fish, rice, or beans."
    ]
  },
  {
    id: "lalo",
    name: "Lalo",
    english: "Jute Leaf Stew",
    category: "main",
    emoji: "🍃",
    time: "2 hrs",
    difficulty: "Medium",
    serves: 6,
    description:
      "The pride of the Artibonite Valley: jute leaves slow-cooked with beef and crab into a silky, deep-green stew. Served over white rice, it's one of Haiti's most treasured regional dishes.",
    ingredients: [
      { item: "1 lb jute leaves (lalo), or spinach in a pinch", key: "lalo", essential: true },
      { item: "1 lb beef stew meat", key: "beef", essential: true },
      { item: "4 blue crabs, cleaned (optional but traditional)", key: "crab", essential: false },
      { item: "2 tbsp epis", key: "epis", essential: false },
      { item: "1 onion, chopped", key: "onion", essential: false },
      { item: "3 cloves garlic", key: "garlic", essential: false },
      { item: "1 scotch bonnet pepper", key: "scotch bonnet", essential: false },
      { item: "3 tbsp oil", key: "oil", essential: false },
      { item: "1 lime", key: "lime", essential: false }
    ],
    steps: [
      "Clean the beef with lime, season with epis, and marinate 1 hour.",
      "Brown the beef in oil, add water, and simmer until nearly tender, about 40 minutes.",
      "Add the crabs and cook 10 minutes.",
      "Stir in the chopped jute leaves with onion, garlic, and the scotch bonnet.",
      "Simmer low, stirring now and then, until the leaves melt into a silky stew, 30–40 minutes.",
      "Serve hot over white rice — the Artibonite way."
    ]
  },
  {
    id: "tchaka",
    name: "Tchaka",
    english: "Corn, Bean & Squash Stew",
    category: "main",
    emoji: "🥘",
    time: "3 hrs",
    difficulty: "Medium",
    serves: 8,
    description:
      "An ancestral harvest stew of cracked corn, beans, squash, and salted pork simmered for hours. One of Haiti's oldest dishes, with roots reaching back to Taíno and rural Vodou traditions.",
    ingredients: [
      { item: "2 cups cracked corn (mayi kase), soaked overnight", key: "corn", essential: true },
      { item: "1 cup red or lima beans, soaked", key: "beans", essential: true },
      { item: "1 lb salted pork or smoked pork, cubed", key: "pork", essential: false },
      { item: "2 cups squash (joumou), cubed", key: "squash", essential: true },
      { item: "1 cup coconut milk (optional)", key: "coconut milk", essential: false },
      { item: "2 tbsp epis", key: "epis", essential: false },
      { item: "1 onion", key: "onion", essential: false },
      { item: "1 scotch bonnet pepper", key: "scotch bonnet", essential: false },
      { item: "2 sprigs thyme", key: "thyme", essential: false }
    ],
    steps: [
      "Soak the cracked corn and beans overnight in separate bowls.",
      "Boil the corn and beans in fresh water until they begin to soften, about 1 hour.",
      "Add the pork and simmer 30 minutes more.",
      "Add the squash, epis, onion, thyme, and scotch bonnet.",
      "Simmer low, stirring, until everything is tender and the squash melts into the broth, about 1 hour. Add coconut milk near the end.",
      "The stew should be thick and hearty. Serve in deep bowls."
    ]
  },
  {
    id: "kalalou",
    name: "Kalalou",
    english: "Okra Stew",
    category: "main",
    emoji: "🥬",
    time: "1.5 hrs",
    difficulty: "Medium",
    serves: 6,
    description:
      "Okra simmered with beef (or crab) in a rich Creole sauce until lush and glossy. Spooned generously over white rice or cornmeal.",
    ingredients: [
      { item: "1 lb fresh okra, sliced", key: "okra", essential: true },
      { item: "1 lb beef stew meat (or crab)", key: "beef", essential: true },
      { item: "2 tbsp epis", key: "epis", essential: false },
      { item: "2 tbsp tomato paste", key: "tomato paste", essential: false },
      { item: "1 onion, chopped", key: "onion", essential: false },
      { item: "2 cloves garlic", key: "garlic", essential: false },
      { item: "1 scotch bonnet pepper", key: "scotch bonnet", essential: false },
      { item: "3 tbsp oil", key: "oil", essential: false },
      { item: "1 lime", key: "lime", essential: false }
    ],
    steps: [
      "Clean the beef with lime, season with epis, and brown it in oil.",
      "Add water and braise until tender, about 45 minutes.",
      "Stir in tomato paste, onion, and garlic; cook 5 minutes.",
      "Add the sliced okra and the whole scotch bonnet.",
      "Simmer gently until the okra is soft and the sauce is glossy, 20–25 minutes.",
      "Serve hot over white rice or mayi moulen."
    ]
  },
  {
    id: "boulet",
    name: "Boulèt",
    english: "Haitian Meatballs in Sauce",
    category: "main",
    emoji: "🧆",
    time: "50 min",
    difficulty: "Easy",
    serves: 4,
    description:
      "Plump, herb-packed meatballs seasoned with epis, browned and simmered in a light Creole tomato sauce. Weeknight comfort food that kids love.",
    ingredients: [
      { item: "1.5 lbs ground beef", key: "ground beef", essential: true },
      { item: "2 tbsp epis", key: "epis", essential: true },
      { item: "1 egg", key: "egg", essential: false },
      { item: "1/2 cup breadcrumbs or flour", key: "flour", essential: false },
      { item: "1/4 cup parsley, chopped", key: "parsley", essential: false },
      { item: "2 tbsp tomato paste", key: "tomato paste", essential: false },
      { item: "1 onion, sliced", key: "onion", essential: false },
      { item: "1 scotch bonnet pepper", key: "scotch bonnet", essential: false },
      { item: "3 tbsp oil", key: "oil", essential: false }
    ],
    steps: [
      "Mix the ground beef with epis, egg, breadcrumbs, parsley, salt, and pepper.",
      "Roll into golf-ball-sized meatballs.",
      "Brown the meatballs in hot oil on all sides; remove.",
      "In the same pan, cook the onion and tomato paste with a cup of water into a light sauce.",
      "Return the meatballs with the scotch bonnet and simmer 15 minutes.",
      "Serve over white rice or with fried plantains."
    ]
  },
  {
    id: "poul-fri",
    name: "Poul Fri",
    english: "Haitian Fried Chicken",
    category: "main",
    emoji: "🍗",
    time: "1.5 hrs",
    difficulty: "Easy",
    serves: 4,
    description:
      "Chicken marinated deeply in epis and citrus, boiled briefly, then fried to a craggy golden crust. Juicier and more fragrant than any fast-food bird.",
    ingredients: [
      { item: "8 pieces chicken (legs & thighs)", key: "chicken", essential: true },
      { item: "3 tbsp epis", key: "epis", essential: true },
      { item: "2 limes", key: "lime", essential: false },
      { item: "3 cloves garlic", key: "garlic", essential: false },
      { item: "1/2 cup flour (optional dusting)", key: "flour", essential: false },
      { item: "1 scotch bonnet pepper", key: "scotch bonnet", essential: false },
      { item: "Oil for frying", key: "oil", essential: true },
      { item: "Salt & pepper", key: "salt", essential: false }
    ],
    steps: [
      "Clean the chicken with lime juice, then season with epis, garlic, salt, and pepper. Marinate at least 1 hour.",
      "Simmer the chicken in its marinade with a splash of water for 15 minutes; drain and pat dry.",
      "Dust lightly with flour if you like extra crunch.",
      "Fry in hot oil until deep golden and crisp, 6–8 minutes.",
      "Serve with pikliz, bannann peze, and diri kole."
    ]
  },
  {
    id: "pwason-fri",
    name: "Pwason Fri",
    english: "Fried Fish",
    category: "main",
    emoji: "🐠",
    time: "45 min",
    difficulty: "Easy",
    serves: 4,
    description:
      "Whole fish scored, marinated in lime and epis, and fried crisp — the smell of every Haitian beach town at sunset. Eaten with fried plantains and plenty of pikliz.",
    ingredients: [
      { item: "2 whole snapper or small fish, scored", key: "fish", essential: true },
      { item: "2 limes", key: "lime", essential: true },
      { item: "2 tbsp epis", key: "epis", essential: false },
      { item: "3 cloves garlic", key: "garlic", essential: false },
      { item: "1 scotch bonnet pepper", key: "scotch bonnet", essential: false },
      { item: "Oil for frying", key: "oil", essential: true },
      { item: "Salt & pepper", key: "salt", essential: false }
    ],
    steps: [
      "Clean the fish well with lime juice, inside and out.",
      "Rub with epis, garlic, salt, and pepper, working into the scored cuts. Marinate 30 minutes.",
      "Pat the fish dry so it fries crisp.",
      "Fry in hot oil until golden and crackly on both sides, 4–6 minutes per side.",
      "Serve with pikliz, bannann peze, and a cold drink."
    ]
  },
  {
    id: "diri-sos-pwa",
    name: "Diri Blan ak Sòs Pwa Nwa",
    english: "White Rice with Black Bean Sauce",
    category: "main",
    emoji: "🍛",
    time: "1 hr",
    difficulty: "Easy",
    serves: 4,
    description:
      "Fluffy white rice blanketed in a velvety black bean sauce enriched with coconut milk. The everyday Haitian plate at its purest — humble, silky, and deeply satisfying.",
    ingredients: [
      { item: "2 cups rice", key: "rice", essential: true },
      { item: "1 cup dried black beans", key: "beans", essential: true },
      { item: "1/2 cup coconut milk", key: "coconut milk", essential: false },
      { item: "2 tbsp epis", key: "epis", essential: false },
      { item: "2 cloves garlic", key: "garlic", essential: false },
      { item: "2 sprigs thyme & parsley", key: "thyme", essential: false },
      { item: "2 tbsp oil", key: "oil", essential: false },
      { item: "Salt to taste", key: "salt", essential: false }
    ],
    steps: [
      "Boil the black beans until very soft, about 1 hour (or use canned).",
      "Blend the beans with their cooking liquid until smooth, then strain for extra silkiness.",
      "Simmer the blended beans with epis, garlic, thyme, coconut milk, and oil until creamy, 15 minutes.",
      "Meanwhile, cook the white rice.",
      "Serve the rice with the sòs pwa poured generously over the top."
    ]
  },
  {
    id: "pate-kode",
    name: "Pate Kòde",
    english: "Fried Stuffed Patties",
    category: "snack",
    emoji: "🥧",
    time: "1.5 hrs",
    difficulty: "Medium",
    serves: 8,
    description:
      "Golden fried dough pockets twisted shut around spiced beef, chicken, or herring. The king of Haitian street food — hot, flaky, and impossible to eat just one.",
    ingredients: [
      { item: "3 cups flour", key: "flour", essential: true },
      { item: "4 tbsp butter or shortening", key: "butter", essential: false },
      { item: "1 tsp baking powder", key: "baking powder", essential: false },
      { item: "1/2 lb ground beef (or shredded herring)", key: "ground beef", essential: true },
      { item: "2 tbsp epis", key: "epis", essential: false },
      { item: "1 onion, minced", key: "onion", essential: false },
      { item: "1 tbsp tomato paste", key: "tomato paste", essential: false },
      { item: "1 scotch bonnet pepper, minced", key: "scotch bonnet", essential: false },
      { item: "Oil for frying", key: "oil", essential: true }
    ],
    steps: [
      "Make the dough: rub butter into flour, baking powder, and salt; add water to form a smooth dough. Rest 30 minutes.",
      "Cook the ground beef with epis, onion, tomato paste, and scotch bonnet until dry and flavorful.",
      "Roll the dough thin and cut into rounds or squares.",
      "Spoon filling onto each piece, fold over, and twist/crimp the edges shut (kòde means twisted!).",
      "Fry in hot oil until puffed and golden, 3–4 minutes per side.",
      "Drain and eat hot, with pikliz of course."
    ]
  },
  {
    id: "chiktay",
    name: "Chiktay Aransò",
    english: "Spicy Shredded Smoked Herring",
    category: "side",
    emoji: "🎣",
    time: "30 min",
    difficulty: "Easy",
    serves: 4,
    description:
      "Smoked herring shredded fine and tossed with fiery scotch bonnet, onion, and lime. Bold and briny — spooned over boiled plantains, avocado, or kasav.",
    ingredients: [
      { item: "1/2 lb smoked herring fillets", key: "herring", essential: true },
      { item: "1 onion, thinly sliced", key: "onion", essential: true },
      { item: "1 bell pepper, thinly sliced", key: "bell pepper", essential: false },
      { item: "1–2 scotch bonnet peppers, minced", key: "scotch bonnet", essential: true },
      { item: "Juice of 2 limes", key: "lime", essential: false },
      { item: "3 tbsp oil", key: "oil", essential: false },
      { item: "2 tbsp parsley, chopped", key: "parsley", essential: false },
      { item: "3 green plantains, boiled (to serve)", key: "plantain", essential: false }
    ],
    steps: [
      "Soak the herring in hot water 15 minutes to tame the salt; drain.",
      "Shred the herring finely with your fingers or two forks, removing any bones.",
      "Warm the oil and briefly sauté the onion and bell pepper — just until fragrant.",
      "Toss the herring with the vegetables, scotch bonnet, lime juice, and parsley.",
      "Serve at room temperature over boiled plantains or sliced avocado."
    ]
  },
  {
    id: "salad-betrav",
    name: "Salad Bètrav",
    english: "Beet & Potato Salad",
    category: "side",
    emoji: "🥗",
    time: "45 min",
    difficulty: "Easy",
    serves: 6,
    description:
      "A rosy-pink salad of beets, potatoes, and carrots folded with mayonnaise. No Haitian holiday table is complete without its cheerful color next to the diri djon djon.",
    ingredients: [
      { item: "3 beets", key: "beet", essential: true },
      { item: "3 potatoes", key: "potato", essential: true },
      { item: "2 carrots", key: "carrot", essential: false },
      { item: "1/2 cup green peas (optional)", key: "peas", essential: false },
      { item: "1/2 cup mayonnaise", key: "mayonnaise", essential: true },
      { item: "1/4 onion, minced", key: "onion", essential: false },
      { item: "1 tbsp vinegar or lime juice", key: "vinegar", essential: false },
      { item: "Salt & pepper", key: "salt", essential: false }
    ],
    steps: [
      "Boil the beets, potatoes, and carrots separately until tender; cool and peel.",
      "Dice everything into small, even cubes.",
      "Fold together with mayonnaise, onion, vinegar, peas, salt, and pepper.",
      "Chill at least 30 minutes — the salad turns its signature pink as it sits.",
      "Serve cold alongside rice dishes and holiday mains."
    ]
  },
  {
    id: "pen-mayi",
    name: "Pen Mayi",
    english: "Haitian Cornbread",
    category: "dessert",
    emoji: "🍞",
    time: "1 hr",
    difficulty: "Easy",
    serves: 8,
    description:
      "A moist, gently sweet cornmeal cake made with coconut milk and warm spices. Somewhere between bread and pudding — perfect with afternoon coffee.",
    ingredients: [
      { item: "2 cups cornmeal", key: "cornmeal", essential: true },
      { item: "1 cup flour", key: "flour", essential: false },
      { item: "1 can coconut milk", key: "coconut milk", essential: true },
      { item: "1 can evaporated milk", key: "milk", essential: false },
      { item: "3/4 cup sugar", key: "sugar", essential: true },
      { item: "4 tbsp butter, melted", key: "butter", essential: false },
      { item: "1 tsp cinnamon", key: "cinnamon", essential: false },
      { item: "1 tsp vanilla", key: "vanilla", essential: false },
      { item: "1 tsp baking powder", key: "baking powder", essential: false },
      { item: "1/2 cup raisins (optional)", key: "raisins", essential: false }
    ],
    steps: [
      "Whisk the cornmeal, flour, sugar, baking powder, cinnamon, and a pinch of salt.",
      "Stir in coconut milk, evaporated milk, melted butter, and vanilla until smooth.",
      "Fold in raisins if using and pour into a buttered baking dish.",
      "Bake at 350°F (175°C) until set and golden, 45–50 minutes.",
      "Cool before slicing — it firms up as it rests. Serve with coffee or chokola."
    ]
  },
  {
    id: "labouyi-bannann",
    name: "Labouyi Bannann",
    english: "Plantain Porridge",
    category: "breakfast",
    emoji: "🥣",
    time: "35 min",
    difficulty: "Easy",
    serves: 4,
    description:
      "Silky breakfast porridge of blended green plantains simmered with milk, cinnamon, and star anise. Warm, filling, and beloved by every Haitian grandmother.",
    ingredients: [
      { item: "2 green plantains", key: "plantain", essential: true },
      { item: "1 can evaporated milk", key: "milk", essential: true },
      { item: "2 cinnamon sticks", key: "cinnamon", essential: true },
      { item: "1 star anise", key: "star anise", essential: false },
      { item: "1 tsp vanilla", key: "vanilla", essential: false },
      { item: "1/2 cup sugar (to taste)", key: "sugar", essential: false },
      { item: "1 pinch salt & nutmeg", key: "salt", essential: false },
      { item: "Zest of 1 lime", key: "lime", essential: false }
    ],
    steps: [
      "Peel the plantains and blend them with 2 cups of water until completely smooth.",
      "Boil 2 cups of water with cinnamon, star anise, lime zest, and salt.",
      "Pour in the plantain purée, whisking constantly so it stays smooth.",
      "Simmer on low, stirring, until thick and glossy, 15–20 minutes.",
      "Stir in the milk, sugar, vanilla, and a whisper of nutmeg; warm through.",
      "Serve hot in bowls — breakfast is ready."
    ]
  },
  {
    id: "blan-manje",
    name: "Blan Manje",
    english: "Coconut Milk Pudding",
    category: "dessert",
    emoji: "🍮",
    time: "30 min + chill",
    difficulty: "Easy",
    serves: 6,
    description:
      "A cool, trembling coconut pudding perfumed with cinnamon, star anise, and lime zest. Light, elegant, and the perfect ending to a spicy meal.",
    ingredients: [
      { item: "1 can coconut milk", key: "coconut milk", essential: true },
      { item: "1 can evaporated milk", key: "milk", essential: true },
      { item: "1/2 cup cornstarch", key: "cornstarch", essential: true },
      { item: "3/4 cup sugar", key: "sugar", essential: false },
      { item: "1 cinnamon stick", key: "cinnamon", essential: false },
      { item: "1 star anise", key: "star anise", essential: false },
      { item: "1 tsp vanilla", key: "vanilla", essential: false },
      { item: "Zest of 1 lime", key: "lime", essential: false },
      { item: "1 pinch salt", key: "salt", essential: false }
    ],
    steps: [
      "Warm the coconut milk and evaporated milk with cinnamon, star anise, lime zest, sugar, and salt.",
      "Dissolve the cornstarch in 1/2 cup cold water.",
      "Whisk the cornstarch mixture into the warm milk.",
      "Cook on low, stirring constantly, until thick enough to coat the spoon heavily.",
      "Remove the spices, stir in vanilla, and pour into molds or cups.",
      "Chill until set, at least 3 hours. Unmold and serve cold."
    ]
  },
  {
    id: "konparet",
    name: "Konparèt",
    english: "Coconut-Ginger Bread of Jérémie",
    category: "dessert",
    emoji: "🥥",
    time: "1.5 hrs",
    difficulty: "Medium",
    serves: 10,
    description:
      "The famous dense coconut-ginger bread from the City of Poets, Jérémie. Sweet, spiced, and sturdy — travelers carry it across the country as a treasured gift.",
    ingredients: [
      { item: "3 cups flour", key: "flour", essential: true },
      { item: "1.5 cups grated coconut", key: "coconut milk", essential: true },
      { item: "1 cup brown sugar", key: "sugar", essential: true },
      { item: "1 tbsp grated ginger", key: "ginger", essential: true },
      { item: "1/2 cup butter, softened", key: "butter", essential: false },
      { item: "1 tsp cinnamon & nutmeg", key: "cinnamon", essential: false },
      { item: "1 tsp vanilla", key: "vanilla", essential: false },
      { item: "1 tsp baking powder", key: "baking powder", essential: false },
      { item: "1/2 cup coconut milk or water", key: "milk", essential: false }
    ],
    steps: [
      "Cream the butter and brown sugar together.",
      "Mix in the grated coconut, ginger, spices, and vanilla.",
      "Add the flour and baking powder, then enough coconut milk to make a thick, heavy dough.",
      "Shape into flattened rounds or press into a pan.",
      "Bake at 350°F (175°C) until deep golden and firm, 40–50 minutes.",
      "Cool completely — konparèt keeps for days and travels beautifully."
    ]
  },
  {
    id: "bonbon-siwo",
    name: "Bonbon Siwo",
    english: "Molasses Spice Cake",
    category: "dessert",
    emoji: "🍯",
    time: "1 hr",
    difficulty: "Easy",
    serves: 8,
    description:
      "Dark, sticky-sweet molasses cake spiced with ginger and cinnamon. An old-fashioned countryside treat that pairs perfectly with a glass of cold milk or hot coffee.",
    ingredients: [
      { item: "2 cups flour", key: "flour", essential: true },
      { item: "1 cup molasses (siwo)", key: "molasses", essential: true },
      { item: "1/2 cup brown sugar", key: "sugar", essential: false },
      { item: "1/2 cup butter, melted", key: "butter", essential: false },
      { item: "1 tbsp grated ginger", key: "ginger", essential: true },
      { item: "1 tsp cinnamon", key: "cinnamon", essential: false },
      { item: "1 tsp baking powder", key: "baking powder", essential: false },
      { item: "1 egg", key: "egg", essential: false },
      { item: "1 pinch salt", key: "salt", essential: false }
    ],
    steps: [
      "Whisk the flour, baking powder, cinnamon, and salt.",
      "In another bowl, beat the molasses, brown sugar, melted butter, egg, and ginger.",
      "Combine wet and dry into a thick batter.",
      "Pour into a buttered pan and bake at 350°F (175°C) for 35–40 minutes.",
      "Cool, cut into dark squares, and serve with coffee."
    ]
  },
  {
    id: "kremas",
    name: "Kremas",
    english: "Creamy Coconut Rum Drink",
    category: "drink",
    emoji: "🥃",
    time: "25 min",
    difficulty: "Easy",
    serves: 10,
    description:
      "Haiti's festive cream liqueur: coconut milk, sweet milks, warm spices, and Haitian rum blended thick and silky. Bottled for Christmas, weddings, and every celebration in between. (Adults only!)",
    ingredients: [
      { item: "1 can coconut milk (or coconut cream)", key: "coconut milk", essential: true },
      { item: "1 can evaporated milk", key: "milk", essential: true },
      { item: "1 can sweetened condensed milk", key: "milk", essential: false },
      { item: "1 cup Haitian rum (Barbancourt if you can!)", key: "rum", essential: true },
      { item: "1 tsp cinnamon", key: "cinnamon", essential: false },
      { item: "1/2 tsp nutmeg", key: "nutmeg", essential: false },
      { item: "1 tbsp vanilla", key: "vanilla", essential: false },
      { item: "Zest of 1 lime", key: "lime", essential: false },
      { item: "1 tsp star anise, steeped (optional)", key: "star anise", essential: false }
    ],
    steps: [
      "Blend the coconut milk until completely smooth.",
      "Whisk in the evaporated milk, condensed milk, spices, vanilla, and lime zest.",
      "Stir in the rum a little at a time, tasting as you go.",
      "Strain into clean bottles and chill well.",
      "Shake before serving over ice. Kremas keeps for weeks in the fridge — if it lasts that long."
    ]
  },
  {
    id: "sitwonad",
    name: "Sitwonad",
    english: "Haitian Limeade",
    category: "drink",
    emoji: "🍋",
    time: "10 min",
    difficulty: "Easy",
    serves: 4,
    description:
      "Fresh lime juice, sugar, and ice-cold water — sometimes with a drop of vanilla or grated ginger. The drink of hot Haitian afternoons.",
    ingredients: [
      { item: "6 limes", key: "lime", essential: true },
      { item: "1/2 cup sugar (to taste)", key: "sugar", essential: true },
      { item: "4 cups cold water", key: "water", essential: false },
      { item: "1/2 tsp vanilla (optional)", key: "vanilla", essential: false },
      { item: "1 tsp grated ginger (optional)", key: "ginger", essential: false },
      { item: "Ice", key: "ice", essential: false }
    ],
    steps: [
      "Squeeze the limes into a pitcher — drop a few squeezed halves in for aroma.",
      "Stir in the sugar and cold water until dissolved.",
      "Add vanilla or ginger if you like.",
      "Pour over plenty of ice and serve immediately."
    ]
  }
];

const CATEGORIES = [
  { id: "all", label: "All", kreyol: "Tout" },
  { id: "main", label: "Mains", kreyol: "Pla Prensipal" },
  { id: "soup", label: "Soups", kreyol: "Soup" },
  { id: "side", label: "Sides", kreyol: "Akonpayman" },
  { id: "breakfast", label: "Breakfast", kreyol: "Dejene" },
  { id: "snack", label: "Snacks", kreyol: "Fritay" },
  { id: "dessert", label: "Desserts", kreyol: "Desè" },
  { id: "drink", label: "Drinks", kreyol: "Bwason" }
];

// Synonyms map user-typed words to canonical ingredient keys.
const INGREDIENT_SYNONYMS = {
  "habanero": "scotch bonnet",
  "hot pepper": "scotch bonnet",
  "chili": "scotch bonnet",
  "chile": "scotch bonnet",
  "piman": "scotch bonnet",
  "pepper": "scotch bonnet",
  "green pepper": "bell pepper",
  "red pepper": "bell pepper",
  "sweet pepper": "bell pepper",
  "pwa": "beans",
  "kidney beans": "beans",
  "red beans": "beans",
  "black beans": "beans",
  "diri": "rice",
  "pork shoulder": "pork",
  "pork butt": "pork",
  "kabrit": "goat",
  "goat meat": "goat",
  "mutton": "goat",
  "poul": "chicken",
  "chicken thighs": "chicken",
  "chicken breast": "chicken",
  "hen": "chicken",
  "beef stew meat": "beef",
  "stew beef": "beef",
  "steak": "beef",
  "vyann": "beef",
  "snapper": "fish",
  "red snapper": "fish",
  "tilapia": "fish",
  "pwason": "fish",
  "lambi": "conch",
  "shrimps": "shrimp",
  "crevette": "shrimp",
  "banann": "plantain",
  "plantains": "plantain",
  "green banana": "plantain",
  "bananas": "banana",
  "fig": "banana",
  "pumpkin": "squash",
  "kabocha": "squash",
  "butternut": "squash",
  "butternut squash": "squash",
  "joumou": "squash",
  "calabaza": "squash",
  "mirliton": "chayote",
  "christophine": "chayote",
  "militon": "chayote",
  "aubergine": "eggplant",
  "berejenn": "eggplant",
  "chou": "cabbage",
  "zonyon": "onion",
  "onions": "onion",
  "lay": "garlic",
  "garlic cloves": "garlic",
  "carrots": "carrot",
  "kawòt": "carrot",
  "potatoes": "potato",
  "pomdetè": "potato",
  "sweet potatoes": "sweet potato",
  "batata": "sweet potato",
  "yams": "yam",
  "yanm": "yam",
  "taro": "malanga",
  "yautia": "malanga",
  "tomatoes": "tomato",
  "tomat": "tomato",
  "ketchup": "tomato paste",
  "tomato sauce": "tomato paste",
  "avocados": "avocado",
  "zaboka": "avocado",
  "citron": "lime",
  "limes": "lime",
  "lemon": "lime",
  "sour orange": "orange",
  "zoranj": "orange",
  "macaroni": "pasta",
  "rigatoni": "pasta",
  "spaghetti": "pasta",
  "noodles": "pasta",
  "penne": "pasta",
  "corn flour": "cornmeal",
  "polenta": "cornmeal",
  "cornflour": "cornmeal",
  "mayi": "cornmeal",
  "evaporated milk": "milk",
  "condensed milk": "milk",
  "whole milk": "milk",
  "lèt": "milk",
  "cheddar": "cheese",
  "parmesan": "cheese",
  "mozzarella": "cheese",
  "fromaj": "cheese",
  "mayo": "mayonnaise",
  "coconut": "coconut milk",
  "kokoye": "coconut milk",
  "vegetable oil": "oil",
  "olive oil": "oil",
  "canola oil": "oil",
  "lwil": "oil",
  "eggs": "egg",
  "ze": "egg",
  "hot dogs": "hot dog",
  "sausage": "hot dog",
  "franks": "hot dog",
  "smoked herring": "herring",
  "dried herring": "herring",
  "aranso": "herring",
  "aransò": "herring",
  "peanut": "peanuts",
  "pistach": "peanuts",
  "cocoa": "chocolate",
  "cacao": "chocolate",
  "cocoa powder": "chocolate",
  "dark chocolate": "chocolate",
  "brown sugar": "sugar",
  "sik": "sugar",
  "cinnamon sticks": "cinnamon",
  "kanèl": "cinnamon",
  "anise": "star anise",
  "scallions": "scallion",
  "green onion": "scallion",
  "green onions": "scallion",
  "chives": "scallion",
  "lettuce": "watercress",
  "greens": "spinach",
  "kale": "spinach",
  "mushroom": "djon djon",
  "black mushroom": "djon djon",
  "dried mushrooms": "djon djon",
  "lima": "lima beans",
  "butter beans": "lima beans",
  "white vinegar": "vinegar",
  "apple cider vinegar": "vinegar",
  "seasoning": "epis",
  "sofrito": "epis",
  "green seasoning": "epis",
  "all purpose flour": "flour",
  "farin": "flour",
  "raisin": "raisins",
  "gonbo": "okra",
  "gumbo": "okra",
  "okras": "okra",
  "jute leaves": "lalo",
  "jute": "lalo",
  "blue crab": "crab",
  "crabs": "crab",
  "krab": "crab",
  "beets": "beet",
  "betrav": "beet",
  "bètrav": "beet",
  "ground meat": "ground beef",
  "minced beef": "ground beef",
  "hamburger": "ground beef",
  "ground turkey": "ground beef",
  "cracked corn": "corn",
  "hominy": "corn",
  "corn kernels": "corn",
  "green peas": "peas",
  "sweet peas": "peas",
  "corn starch": "cornstarch",
  "cane syrup": "molasses",
  "siwo": "molasses",
  "rhum": "rum",
  "barbancourt": "rum",
  "kleren": "rum",
  "white rum": "rum",
  "dark rum": "rum"
};
