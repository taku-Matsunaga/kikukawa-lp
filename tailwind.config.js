/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      textBlack: '#1E3447',
      textGray: '#637381',
      textWhite: '#FFFFFF',
      mainColor: '#171C61',
      subColor: '#91CBD8',
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
        'kv-gradient': "linear-gradient(135deg, #9EA7F7 32.36%, #91CBD8 79.42%)",
      },
      boxShadow: {
        'kv': '12px 12px 20px 0px #91CBD8',
      },
      backgroundColor: {
        'transparent': 'transparent',
      },
    },
  },
  plugins: [require("tailgrids/plugin")],

}

