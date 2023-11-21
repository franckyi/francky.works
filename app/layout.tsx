import type { Metadata } from "next";
import { Exo } from "next/font/google";
import "./globals.css";

const exo = Exo({ subsets: ["latin"] });
const footerText =
  "Francky Iside - Projektowanie Stron Internetowych i Web Development";

export const metadata: Metadata = {
  title: "Francky Iside - Web development",
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
      <body className={exo.className}>{children}</body>
      <footer className="w-full py-4 bg-slate-900 text-slate-500 text-center border-t-2 border-slate-800">
        {footerText}
      </footer>
    </html>
  );
}
