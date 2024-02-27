import type { Metadata } from "next";
import { Bruno_Ace } from "next/font/google";
import { Exo } from "next/font/google";
import "./globals.css";

const secondaryFont = Bruno_Ace({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-secondary",
});
const primaryFont = Exo({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-primary",
});

export const metadata: Metadata = {
  title: "Francky Iside - Web development",
  description:
    "Nazywam się Francky Iside. Jestem frontend developerem specjalizującym się w projektowaniu responsywnych, wydajnych stron internetowych, aplikacji SPA i sklepów eCommerce. Wykorzystuję technologie TypeScript, React, Next.js, Php, oraz WordPress.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${primaryFont.className} ${secondaryFont.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
