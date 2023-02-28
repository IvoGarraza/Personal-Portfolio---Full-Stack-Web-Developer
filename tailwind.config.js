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
      }
    },
  },
  plugins: [],
}
