/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: '#f8f9fa',
        dark: '#212529',
        'text-light': '#212529',
        'text-dark': '#f8f9fa',
      },
    },
  },
  plugins: [],
}