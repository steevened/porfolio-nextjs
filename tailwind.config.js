/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'app-gray': '#101010',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'app-shadow': 'inset 0 0 0 1px rgba(255, 255, 255, 0.1)',
        'app-shadow-light': 'inset 0 0 0 1px rgba(0, 0, 0, 0.1)',
        'app-shadow-light-hover': 'inset 0 0 0 1px rgba(0, 0, 0, 0.9)',
        'app-shadow-hover': 'inset 0 0 0 1px rgba(255, 255, 255, 0.5)',
        'app-top': 'inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        'app-bottom': 'inset 0 -1px 0 rgba(255, 255, 255, 0.1)',
        'app-bottom-light': '0 1px 0 rgba(0, 0, 0, 0.1)',
        'app-left': 'inset 1px 0 0 rgba(255, 255, 255, 0.1)',
        'app-right': 'inset -1px 0 0 rgba(255, 255, 255, 0.1)',
        'app-image': '0 0 0 1px rgba(255, 255, 255, 0.1)',
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      },
    },
  },
  plugins: [],
};
