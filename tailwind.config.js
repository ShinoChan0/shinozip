/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/*.{html,js}",
    "./src/**/*.{html,js}",
    "./src/**/**/*.{html,js}",
    "./src/**/**/**/*.{html,js}"
  ],
  theme: {
    extend: {
      width: {
        '290': "290px",
        '400': "400px",
        '18': "72px",
        '22': "88px",
      },
      spacing: {
        '14': "56px",
      },
      backgroundColor: {
        'light': "#f0e7db",
        'dark': "#38343c",
        'dark-nav' : "#201c24"
      },
      margin: {
        '120': "33rem"
      },
      textColor: {
        'dark': "rgba(255, 255, 255, 0.92)"
      },
      borderColor: {
        'dark': "rgba(255, 255, 255, 0.92)"
      },
      stroke: {
        'dark': "rgba(255, 255, 255, 0.92)"
      }
    },
  },
  plugins: [],
}

