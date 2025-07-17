/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode:'class',
  theme: {
    extend: {
      colors: {
        darkbg: "#1E293B"
      }
    }
  },
  plugins: [],
}