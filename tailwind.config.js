/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,js}"],
  theme: {
    colors: {
      'gris1': '#545454',
      'gris2': '#d9d9d9',
      'rosa1': '#ff7bac'
    },
    extend: {
      fontFamily: {
        inter: ["inter", "serif"]
      }
    },
  },
  plugins: [],
}
