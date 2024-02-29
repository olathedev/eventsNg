/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        // primary: '#0A5C36',
        // primary: '#00a082',
        primary: '#8363ee',
        // secondary: '#0F5132',
        secondary: '#0E0D13',
        tertiary: '#14452F'
      },
      fontFamily: {
        monteserat: ['Montserrat', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
        Roboto: ['Roboto', 'sans-serif'],

      } 
    },
  },
  plugins: [],
}