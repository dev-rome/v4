/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#f8f9fa",
        dark: "#212529",
        "light-text": "#212529",
        "dark-text": "#f8f9fa",
        "accent-light": "#007bff",
        "accent-dark": "#0056b3",
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
};
