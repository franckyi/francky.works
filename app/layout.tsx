"use client";
import "./globals.css";
import { ReactNode, useState } from "react";
import AppBar from "@/components/common/AppBar";
import Footer from "@/components/common/Footer";
import { primaryFont, secondaryFont } from "@/app/fonts";
import ThemeContext from "@/context-api/ThemeContext";

export default function RootLayout({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState(true);

  function toggleTheme() {
    setTheme(!theme);
  }

  function getTheme() {
    return theme ? " dark" : "";
  }

  return (
    <ThemeContext.Provider value={theme}>
      <html
        lang="en"
        className={`${primaryFont.className} ${
          secondaryFont.variable
        }${getTheme()}`}
      >
        <body className="bg-light text-dark dark:bg-dark dark:text-light">
          <AppBar toggleTheme={toggleTheme} />
          <main className="p-4">{children}</main>
          <Footer />
        </body>
      </html>
    </ThemeContext.Provider>
  );
}
