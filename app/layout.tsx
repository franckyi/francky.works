import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Francky Iside - Produkty cyfrowe",
  description:
    "Nazywam się Francky Iside. Jestem web developerem z Gdańska. Specjalizuję się w projektowaniu, oraz w tworzeniu stron internetowych i aplikacji web. Wykorzystuję technologie TypeScript, Php, React, Wordpress i Next.js.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={inter.className + "p-4"}>{children}</body>
      <Footer />
    </html>
  );
}
