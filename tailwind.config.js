/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      textBlack: '#1E3447',
      textGray: '#637381',
      textWhite: '#FFFFFF',
      blueMain: '#171C61',
      blueSub: '#91CBD8',
      whiteMain: '#FFFFFF',
    },
    extend: {
      fontFamily: {
        'sans': ['Noto Sans JP', 'sans-serif']
      },
      fontWeight: {
        'light': 300,
        'normal': 400,
        'medium': 500,
        'bold': 700,
        'extrabold': 800,
        'black': 900,
      }
    },
  },
  plugins: [require("tailgrids/plugin")],

}

