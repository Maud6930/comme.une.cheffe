/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/home.tsx",
    "./src/home.css",
    "./src/formation.tsx",
    "./src/contactPage.tsx"
  ],
  theme: {
    extend: {fontFamily: {
      'playfair-display': ['"Playfair Display SC"', 'serif'],
      'ovo': ['Ovo', 'serif'],
    },
  },
  },
  plugins: [],
}

