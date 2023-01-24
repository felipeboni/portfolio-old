/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F9F6FE',
          500: '#721CE3',
          900: '#4D2783'
        },
        secondary: '#FFC83E',
        offwhite: '#F9F6FE'
      }
    },
    fontFamily: {
      'display': ['"Le Murmure"', 'sans-serif'],
      'sans': ['Inter', 'sans-serif'],
    }
  },
  plugins: [],
}
