/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // <--- Ini penting!
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'bg-colors': 'background-color, color, border-color',
      },
    },
  },
  plugins: [],
}
