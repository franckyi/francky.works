import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";

function LightDarkToggleIcon() {
  // const theme = useContext(ThemeContext);
  // return theme === "dark" ? <SunIcon /> : <MoonIcon />;
  return <SunIcon className="w-6 h-6 text-slate-400" />;
}

export default LightDarkToggleIcon;
