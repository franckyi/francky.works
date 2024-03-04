"use client";
import "./globals.css";
import { ReactNode, createContext, useState } from "react";
import AppBar from "./ui/AppBar";
import Footer from "./ui/Footer";
import { primaryFont, secondaryFont } from "./ui/fonts";

const ThemeContext: Context<null | string> = createContext<null | string>(null);

export default function RootLayout({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState("dark");

  function toggleTheme() {
    if (theme === "dark") {
      setTheme("");
    } else {
      setTheme("dark");
    }
  }

  return (
    <ThemeContext.Provider value={theme}>
      <html
        lang="en"
        className={`${primaryFont.className} ${secondaryFont.variable} ${theme}`}
      >
        <body className="bg-slate-300 text-slate-800 dark:bg-slate-900 dark:text-slate-500">
          <AppBar toggleTheme={toggleTheme} />
          <main className="p-4">{children}</main>
          <Footer />
        </body>
      </html>
    </ThemeContext.Provider>
  );
}
