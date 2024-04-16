import ThemeContext from "@/context-api/ThemeContext";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";

const sunIconClasses = "w-6 h-6 text-slate-400 hover:text-slate-500";
const moonIconClasses = "w-6 h-6 text-slate-600 hover:text-slate-500";

export default function ThemeToggle() {
  const theme = useContext(ThemeContext);
  return theme ? (
    <SunIcon className={sunIconClasses} />
  ) : (
    <MoonIcon className={moonIconClasses} />
  );
}
