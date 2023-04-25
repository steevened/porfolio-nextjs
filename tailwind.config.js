/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  // important: true,
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        scale: {
          '0%, 100%': { transform: 'scale(1.00)' },
          '50%': { transform: 'scale(1.02)' },
        },
      },
      colors: {
        sky: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        slate: {
          50: '#f9fafb',
          100: '#f4f5f7',
          200: '#e5e7eb',
          300: '#d2d6dc',
          400: '#9fa6b2',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#252f3f',
          900: '#161e2e',
        },
        'app-gray': '#101010',
        'gradient-teal': '#477ef0',
        'gradient-purple': '#e34b9e',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'app-shadow': 'inset 0 0 0 1px rgba(255, 255, 255, 0.1)',
        'app-shadow-light': 'inset 0 0 0 1px rgba(0, 0, 0, 0.2)',
        'app-shadow-light-hover': 'inset 0 0 0 1px rgba(0, 0, 0, 0.9)',
        'app-shadow-hover': 'inset 0 0 0 1px rgba(255, 255, 255, 0.5)',
        'app-top': 'inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        'app-bottom': 'inset 0 -1px 0 rgba(255, 255, 255, 0.1)',
        'app-top-light': 'inset 0 1px 0 rgba(0, 0, 0, 0.3)',
        'app-bottom-light': '0 1px 0 rgba(0, 0, 0, 0.3)',
        'app-left': 'inset 1px 0 0 rgba(255, 255, 255, 0.1)',
        'app-right': 'inset -1px 0 0 rgba(255, 255, 255, 0.1)',
        'app-image': '0 0 0 1px rgba(255, 255, 255, 0.1)',
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
        scale: 'scale 5s ease-in-out infinite',
      },

      backgroundImage: {
        light: 'url("../public/dots-pattern.svg")',
        dark: 'url("../public/bg.svg")',
      },
    },
  },
  plugins: [],
});
