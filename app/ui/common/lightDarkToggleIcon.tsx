import ThemeContext from "@/app/context api/ThemeContext";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";

const sunIconClasses = "w-6 h-6 text-slate-400";
const moonIconClasses = "w-6 h-6 text-slate-600";

function LightDarkToggleIcon() {
  const theme = useContext(ThemeContext);
  return theme === "dark" ? (
    <MoonIcon className={moonIconClasses} />
  ) : (
    <SunIcon className={sunIconClasses} />
  );
  // return <SunIcon className="w-6 h-6 text-slate-400" />;
}

export default LightDarkToggleIcon;
