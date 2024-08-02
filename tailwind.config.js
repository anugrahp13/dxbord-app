/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'primary': '#14b8a6',
        'secondary': '#64748b',
        'dark': '#0f172a',
      },
      fontFamily: {
        quicksand : ['Quicksand', 'sans-serif']
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}

