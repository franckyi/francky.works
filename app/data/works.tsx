import IWork from "@/app/types/IWork";

export const worksHeading = "My works";
export const workList: IWork[] = [
  {
    title: "website redesign",
    client: "Norbud",
    business: "Constructions",
    imgUrl: "/img/norbud.webp",
    desc: (
      <>
        <p>
          Norbud is a Polish construction company. What I did for the client:
        </p>
        <ul className="list-disc">
          <li>Improved color palette, UI/UX, frontend development</li>
          <li>
            Implemented light/dark mode using React Context API and Tailwind
          </li>
          <li>
            Used PHP, CPTs and CFs to program a gallery system and other content
            in WordPress backend to let client easily manage content to be
            displayed on the frontend.
          </li>
          <li>
            Implemented React carousel library to work with WordPress image
            galleries.
          </li>
        </ul>
      </>
    ),
    myRole: ["UI design", "frontend", "backend"],
    stack: [
      "TypeScript",
      "react",
      "Next.js",
      "PHP",
      "WordPress Rest API",
      "tailwind CSS",
      "vercel",
    ],
    gitUrl: "https://github.com/franckyi/norbud-frontend",
    liveUrl: "https://norbud-frontend.vercel.app/",
    designUrl: null,
  },
  {
    title: "restaurant website",
    client: "Hassan",
    business: "Gastronomy",
    imgUrl: "/img/kebab.webp",
    desc: "Website for a restaurant in Starogard Gdańsk. The client wanted a performant website with modern UI. I was responsible for the UI/UX design and full stack development. I used React and Next on the frontend and WordPress as a headless CMS.",
    myRole: ["UI/UX", "fullstack development"],
    stack: [
      "JavaScript",
      "react",
      "Next.js",
      "WordPress Rest API",
      "tailwind CSS",
      "vercel",
    ],
    gitUrl: "https://github.com/franckyi/hassan-website",
    liveUrl: "https://www.kebab-hassan.pl/",
    designUrl: null,
  },
  {
    title: "modern one-page website",
    client: "Primo MOS",
    business: "Hairstyling",
    imgUrl: "/img/primo.webp",
    desc: "Developed a modern website for Primo MOS Barber Shop in Gdańsk. Curated the color palette, UI/UX, responsiveness and light/dark mode.",
    myRole: ["UI/UX, web development"],
    stack: [
      "TypeScript",
      "react",
      "Next.js",
      "wordPress REST API",
      "CSS",
      "tailwind CSS",
      "vercel",
    ],
    gitUrl: "https://github.com/franckyi/primomos",
    liveUrl: "https://www.primomosbarbershop.pl",
    designUrl: null,
  },
  {
    title: "performant frontend app for NBA fans",
    client: "Basket Maniacs",
    business: "Sport",
    imgUrl: "/img/bm.webp",
    desc: "An Angular web application showing last game scores, news and historical info about teams, players and games from the NBA world.",
    myRole: ["UI/UX design", "SPA development"],
    stack: ["figma", "angular", "typescript", "RxJs", "Rest API"],
    gitUrl: "https://github.com/franckyi/basket-maniacs-app",
    liveUrl: "https://basketmaniacs.francky.works",
    designUrl:
      "https://www.figma.com/file/zXa5Q8IpAgz19Uqle2R4NH/Serwis-NBA?type=design&node-id=0%3A1&mode=design&t=QtLDPxJ0HFTGQ87l-1",
  },
  {
    title: "website redesign",
    client: "Godere.pl",
    business: "Tecnology",
    imgUrl: "/img/godere.webp",
    desc: "Developed a new website for the client. Godere designs and builds original computer cases using LEGO pieces. I also designed the logo and business cards.",
    myRole: ["logo", "business cards", "web development", "UI/UX"],
    stack: [
      "inkscape",
      "Affinity Designer",
      "Affinity Photo",
      "javascript",
      "typescript",
      "angular",
      "Angular Material",
      "CSS",
    ],
    gitUrl: "https://github.com/franckyi/godere.pl",
    liveUrl: "http://godere.pl/",
    designUrl: "https://www.behance.net/gallery/78871491/Godere-Logo",
  },
  {
    title: "new home page design",
    client: "Niimbot.pl",
    business: "E-commerce",
    imgUrl: "/img/nii.webp",
    desc: "Niimbot.pl is a Polish leader in reselling printers and labels. I did a refresh of the home page. I improved the UX, modernized the design, fixed color palette, the page HTML structure dividing in subsections, added new components such as carousels and CSS transitions. The client asked also to improve performance on mobile devices. I did this with a resulting performance gain from 6% to 28% according to LightHouse.",
    myRole: [
      "Home page UI/UX",
      "E-commerce tasks",
      "Frontend development",
      "Mobile performance optimization",
    ],
    stack: ["wordPress", "WooCommerce", "CSS", "HTML"],
    gitUrl: null,
    liveUrl: "https://niimbot.pl",
    designUrl: null,
  },
  {
    title: "online shop for warriors",
    client: "Daddy's DSGN",
    business: "E-commerce",
    imgUrl: "/img/daddys.webp",
    desc: "Daddy's DSGN crafts sports wear and accessories for atletes and passionates. I designed the views with Figma, developed a custom WordPress theme, added content and configured the e-commerce in WooCommerce.",
    myRole: ["UI/UX design", "custom WordPress theme"],
    stack: ["figma", "WordPress", "PHP", "CSS", "wooCommerce"],
    gitUrl: null,
    liveUrl: "https://daddys.pl",
    designUrl:
      "https://www.figma.com/file/IAJYrobSn8iRPy3q6J6boO/Daddys-ecommerce?type=design&mode=design&t=hSwubaL4lxEmMaJE-1",
  },
  {
    title: "elegant company website",
    client: "Classic Meble",
    business: "Home furnishing",
    imgUrl: "/img/cm.webp",
    desc: "Developed a modern, elegant company website for Classic Meble. The client specialises in the production and sell of ad-hoc furnishing. Offers also free transport services in Trójmiasto area. They wanted an elegant, professional design that reflects the brand values.",
    myRole: ["web development"],
    stack: ["wordPress", "PHP", "CSS", "Bootstrap"],
    gitUrl: null,
    liveUrl: "https://classicmeble.pl/",
    designUrl: null,
  },
  {
    title: "performant website",
    client: "G-BIZ Księgowość",
    business: "Accounting",
    imgUrl: "/img/gbiz.webp",
    desc: "G-Biz is an accounting studio based in Gdynia. I was responsible for designing logo, business card and website. The client wanted a one-page website, readable, easy to navigate and performant. Therefore I decided to use clean HTML, CSS with a minimal usage of JavaScript, achieving blazing loading performance.",
    myRole: ["logo", "business cards", "web development"],
    stack: ["HTML", "CSS", "JavaScript", "illustrator"],
    gitUrl: "https://github.com/franckyi/gbiz",
    liveUrl: "http://g-biz.pl",
    designUrl: "https://www.behance.net/gallery/70245947/G-BIZ-Logo-Website",
  },
  {
    title: "website redesign",
    client: "Dla Maluszka",
    business: "Education",
    imgUrl: "/img/dm.webp",
    desc: "For Dla Maluszka in Warsaw I redesigned the website, creating a custom WordPress theme for the existing CMS installation.",
    myRole: ["Custom WordPress theme"],
    stack: ["WordPress", "PHP", "CSS"],
    gitUrl: null,
    liveUrl: "https://dlamaluszka.waw.pl/",
    designUrl: null,
  },
  {
    title: "modern company website",
    client: "Sauber Serwis",
    business: "Services",
    imgUrl: "/img/sauber.webp",
    desc: "Designed logo and website for Sauber Serwis.",
    myRole: ["logo", "UI/UX design", "web development"],
    stack: ["affinity designer", "wordPress", "Elementor"],
    gitUrl: null,
    liveUrl: "http://sauberserwis.pl/",
    designUrl: null,
  },
  {
    title: "weather app with live background",
    client: "Meteo Livebg",
    business: "Life style",
    imgUrl: "/img/meteo.webp",
    desc: (
      <>
        Weather app with live background. Check also other versions made with{" "}
        <a
          href="https://meteovue.francky.works/"
          target="_blank"
          rel="noopener noreferrer nofollow"
          title="made with Vue"
          className="underline"
        >
          Vue
        </a>{" "}
        and{" "}
        <a
          href="https://meteoangular.francky.works/"
          target="_blank"
          rel="noopener noreferrer nofollow"
          title="made with Angular"
          className="underline"
        >
          Angular
        </a>
      </>
    ),
    myRole: ["SPA development"],
    stack: ["javaScript", "CSS", "Rest API"],
    gitUrl: "https://github.com/franckyi/meteo-livebg-web-app",
    liveUrl: "https://meteolivebg.francky.works/",
    designUrl: null,
  },
  {
    title: "minitool",
    client: "Seconds formatter",
    business: "Utilities",
    imgUrl: "/img/sec.webp",
    desc: "A simple minitool taking a count of seconds as input and will tell you how many days, hours, minutes or even years have passed in that amount of seconds. Of course in a more readable way.",
    myRole: ["web application development"],
    stack: ["javaScript"],
    gitUrl: "https://github.com/franckyi/seconds-formatter",
    liveUrl: "https://secondsformatter.francky.works/",
    designUrl: null,
  },
  {
    title: "responsive wedding page",
    client: "Tiffania & Justin",
    business: "Life style",
    imgUrl: "/img/jt.webp",
    desc: "A wedding page with countedown to the date of the upcoming wedding. Shows also other important information like the venue and locations. The goal was to deliver guests all the important info in a beautiful way, independently from which mobile device they have. In fact the page is fully responsive.",
    myRole: ["UI/UX design", "web development"],
    stack: ["HTML", "CSS", "javaScript"],
    gitUrl: "https://github.com/franckyi/justinandtiffania.com",
    liveUrl: "https://justinandtiffania.com/",
    designUrl: null,
  },
];
