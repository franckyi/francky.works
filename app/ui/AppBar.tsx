import Image from "next/image";
import { menuItems } from "../data/appbar-links";
import LightDarkToggleIcon from "./common/lightDarkToggleIcon";
import { useContext } from "react";
import ThemeContext from "../context api/ThemeContext";

const linkClasses =
  "text-sm lg:ml-4 px-2 lg:px-4 py-2 border-2 border-slate-900 dark:border-slate-600 hover:border-2 hover:border-b-8 hover:border-emerald-400";

interface AppBarProps {
  toggleTheme: () => void;
}

function AppBar({ toggleTheme }: AppBarProps) {
  const theme = useContext(ThemeContext);

  return (
    <header className="flex w-full justify-between pt-4 pb-8 lg:px-8">
      <Image
        className="lg:ml-4"
        src="/img/logo.svg"
        alt="Francky Logo"
        width={120}
        height={32}
        priority
        draggable="false"
      />
      <div className="flex items-center">
        <button type="button" onClick={toggleTheme} title="toggle theme">
          <LightDarkToggleIcon />
        </button>
        {menuItems.map((item, index) => {
          return (
            <a
              key={index}
              href={item.url}
              target={item.target}
              className={linkClasses}
            >
              {item.name}
            </a>
          );
        })}
      </div>
    </header>
  );
}

export default AppBar;
