# 🇭🇹 Kwizin Lakay — Haitian Recipe Finder

A Haiti-themed recipe app: browse 42 authentic Haitian dishes, or type in the
ingredients you have and get matched to dishes you can cook right now.

**Features**

- 📖 Built-in database of Haitian classics — Soup Joumou, Griot, Diri ak Djon
  Djon, Lalo, Pikliz, Kremas, and many more — with Kreyòl and English names
- 🧺 *Kisa m ka kwit?* — ingredient-based dish matching with synonym support
  (English and Kreyòl ingredient names both work)
- ✏️ Add your own dishes or edit the built-in ones, right in the app
- 📱 Installable on iPhone/Android via "Add to Home Screen," works offline

**Running it**

It's a static site — open `index.html` in any browser, or serve the folder:

```
python3 -m http.server 8756
```

Your added/edited dishes are stored in the browser (localStorage). Use the
Export/Import buttons in the "Add a Dish" tab to back them up or move them
between devices.
