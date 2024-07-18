/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      borderColor:{
        'primary':'rgb(1, 1, 48)',
        'secondary': 'rgb(1, 1, 48)'
      }
    },
    fontFamily:{'abi-font':'Caveat'}
  },
  plugins: [],
}