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
      transparent: "transparent",
      primary: "#833ab4",
      secondary: "#fd1d1d",
      accent: "#fcb045",
      dark: "#090712",
      medium: "#151221",
      light: "#dfdce1",
      gray: "#777",
      lightGray: "#999",
      labelDark: "#162342",
      labelLight: "#d2cdd6",
    },
  },
};
export default config;
