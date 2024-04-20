import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  plugins: [],
  theme: {
    colors: {
      primary: "#833ab4",
      secondary: "#fd1d1d",
      accent: "#fcb045",
      dark: "#0F172A",
    },
  },
};
export default config;
