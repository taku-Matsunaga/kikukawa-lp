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
      blueBg: '#E4EAEE',
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
      },
      backgroundImage: {
        'green-gradient': 'linear-gradient(114deg, #96BDDA 5.33%, #27B8B8 47.66%, #96BDDA 99.84%)',
      }
    },
  },
  plugins: [require("tailgrids/plugin")],

}

