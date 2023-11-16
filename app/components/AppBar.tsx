import Image from "next/image";

interface IMenuItem {
  name: string;
  url: string;
  target: string;
}

let menuItems: IMenuItem[] = [
  { name: "GitHub", url: "https://github.com/franckyi", target: "_blank" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/franckyiside",
    target: "_blank",
  },
  {
    name: "Behance",
    url: "https://www.behance.net/iside",
    target: "_blank",
  },
];

export default function AppBar() {
  return (
    <nav className="flex w-full justify-between mb-12">
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/logo-light.svg"
        alt="Francky Logo"
        width={88}
        height={24}
        priority
        draggable="false"
      />
      <div>
        {menuItems.map((item) => {
          return (
            <a
              href={item.url}
              target={item.target}
              className="ml-4 px-4 py-2 hover:border-2 hover:border-b-8 hover:border-emerald-500 hover:rounded"
            >
              {item.name}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
