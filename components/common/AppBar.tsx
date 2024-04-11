import Image from "next/image";
import { menuItems } from "../../data/appbar-links";
import ThemeToggle from "./ThemeToggle";

const linkClasses =
  "text-sm lg:ml-4 px-2 lg:px-4 py-2 border-2 border-b-8 border-slate-500 dark:border-slate-600 hover:border-slate-900 dark:hover:border-emerald-400";

type AppBarProps = {
  toggleTheme: () => void;
};

function AppBar({ toggleTheme }: AppBarProps) {
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
          <ThemeToggle />
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
