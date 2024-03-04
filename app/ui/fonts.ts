import { Bruno_Ace } from "next/font/google";
import { Exo } from "next/font/google";

export const secondaryFont = Bruno_Ace({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-secondary",
});
export const primaryFont = Exo({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-primary",
});
