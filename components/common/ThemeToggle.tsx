import ThemeContext from "@/context-api/ThemeContext";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";

const sunIconClasses = "w-6 h-6 text-gray hover:text-accent";
const moonIconClasses = "w-6 h-6 text-lightGray hover:text-accent";

export default function ThemeToggle() {
  const theme = useContext(ThemeContext);
  return theme ? (
    <SunIcon className={sunIconClasses} />
  ) : (
    <MoonIcon className={moonIconClasses} />
  );
}
