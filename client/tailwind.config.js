/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#fef3f0',
          500: '#CF4B00',
          600: '#b33d00',
          700: '#8a2f00',
        },
      },
    },
  },
  plugins: [],
}
