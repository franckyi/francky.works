"use client";
import "./globals.css";
import { ReactNode, useState } from "react";
import AppBar from "@/components/common/AppBar";
import Footer from "@/components/common/Footer";
import { primaryFont, secondaryFont } from "@/app/fonts";
import ThemeContext from "@/context-api/ThemeContext";

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
          {/* <Footer /> */}
        </body>
      </html>
    </ThemeContext.Provider>
  );
}
