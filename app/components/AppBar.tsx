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
        className="relative"
        src="/logo-dark.svg"
        alt="Francky Logo"
        width={120}
        height={32}
        priority
        draggable="false"
      />
      <div>
        {menuItems.map((item) => {
          return (
            <a
              href={item.url}
              target={item.target}
              className="ml-4 px-4 py-2 border-2 border-slate-900 hover:border-2 hover:border-b-8 hover:border-amber-400 hover:rounded"
            >
              {item.name}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
