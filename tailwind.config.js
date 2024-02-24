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
        primary: '#1a723f',
        secondary: '#0F5132',
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