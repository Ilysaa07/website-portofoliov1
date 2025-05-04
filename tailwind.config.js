/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // <--- Ini penting!
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        dark: {
          DEFAULT: '#121212',
          lighter: '#212121',
        },
      },
      transitionProperty: {
        'bg-colors': 'background-color, color, border-color',
      },
    },
  },
  plugins: [],
}
