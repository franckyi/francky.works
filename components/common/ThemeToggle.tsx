import ThemeContext from "@/context-api/ThemeContext";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useContext } from "react";

const sunIconClasses = "w-6 h-6 text-lightGray hover:text-accent";
const moonIconClasses = "w-6 h-6 text-lightGray hover:text-accent";

export default function ThemeToggle() {
  const theme = useContext(ThemeContext);
  return theme ? (
    <LightModeIcon className={sunIconClasses} />
  ) : (
    <DarkModeIcon className={moonIconClasses} />
  );
}
