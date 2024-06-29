/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: '#37B7C3', // Define your custom RGB color here
        colorPalette1: "#EBF4F6",
        colorPalette2: "#37B7C3",
        colorPalette3: "#088395",
        colorPalette4: "#071952",
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

