interface IMenuItem {
  name: string;
  url: string;
  target: string;
}

export const menuItems: IMenuItem[] = [
  { name: "GitHub", url: "https://github.com/franckyi", target: "_blank" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/franckyiside",
    target: "_blank",
  },
  {
    name: "v.2022",
    url: "https://franckyi.github.io/my-portfolio-website-v2022/",
    target: "_blank",
  },
];
