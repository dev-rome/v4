import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          primaryBg: "#f8f9fa",
          primaryText: "#212529",
          accent: "#1e90ff",
        },
        dark: {
          primaryBg: "#212529",
          primaryText: "#f8f9fa",
          accent: "#00bfff",
        },
      },
      fontSize: {
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
      },
    },
  },
  plugins: [],
};
export default config;
