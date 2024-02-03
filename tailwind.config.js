/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      textBlack: '#1E3447',
    },
    extend: {},
  },
  plugins: [require("tailgrids/plugin")],

}

