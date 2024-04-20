import { menuItems } from "../../data/appbar-links";
import ThemeToggle from "./ThemeToggle";

const linkClasses =
  "text-sm lg:ml-4 px-2 lg:px-4 py-2 border-2 border-b-8 border-primary dark:border-primary hover:border-accent dark:hover:border-accent hover:bg-gradient-to-r from-primary hover:text-light via-secondary to-accent";

type AppBarProps = {
  toggleTheme: () => void;
};

export default function AppBar({ toggleTheme }: AppBarProps) {
  return (
    <header className="flex w-full justify-between pt-4 pb-8 lg:px-8">
      <button type="button" onClick={toggleTheme} title="toggle theme">
        <ThemeToggle />
      </button>
      <div className="flex items-center">
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
