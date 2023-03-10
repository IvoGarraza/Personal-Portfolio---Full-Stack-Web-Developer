/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'port__black':'#222831',
        'port__gray':'#393E46',
        'port__blue': '#00ADB5',
        'port__white':'#EEEEEE'
      },
      backgroundImage:{
        'hoobank': "url('/src/assets/cardsImages/hoobank.png')",
        'ducky':"url('/src/assets/cardsImages/rubber-ducky.png')",
        'extension':"url('/src/assets/cardsImages/extension.jpg')",
        'pokemon':"url('/src/assets/cardsImages/pokemon.jpg')",
        'countries':"url('/src/assets/cardsImages/countries.jpg')",
        'gea':"url('/src/assets/cardsImages/gea.png')",
        'portafolio':"url('/src/assets/cardsImages/portafolio2.png')",
        'torralba': "url('/src/assets/cardsImages/torralba.jpg')"
      },
      fontFamily:{
        ubuntu:['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}
