import Hero from "@/components/Hero/Hero";
import Portfolio from "@/components/Portfolio/Portfolio";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Francky Iside - Web development",
  description:
    "Nazywam się Francky Iside. Jestem frontend developerem specjalizującym się w projektowaniu responsywnych, wydajnych stron internetowych, aplikacji SPA i sklepów eCommerce. Wykorzystuję technologie TypeScript, React, Next.js, Php, oraz WordPress.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Portfolio />
    </>
  );
}
