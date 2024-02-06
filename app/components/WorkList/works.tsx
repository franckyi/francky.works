import IWork from "@/app/types/IWork";

function getJobDesc(client: string): string | JSX.Element | null {
  if (client === "Meteo Livebg") {
    return (
      <>
        Aplikacja pogody ze zmieniającym się tłem. Sprawdź również wersję{" "}
        <a
          href="https://meteovue.francky.works/"
          target="_blank"
          rel="noopener noreferrer nofollow"
          title="Wersja Vue"
          className="underline"
        >
          Vue
        </a>{" "}
        oraz{" "}
        <a
          href="https://meteoangular.francky.works/"
          target="_blank"
          rel="noopener noreferrer nofollow"
          title="Wersja Angular"
          className="underline"
        >
          Angular
        </a>
      </>
    );
  }
  return null;
}

let workList: IWork[] = [
  {
    title: "Strona restauracji",
    client: "Hassan",
    business: "Gastronomia",
    imgUrl: "/img/kebab.webp",
    desc: "Strona dla restauracji w Starogardzie Gdańskim. Firmie zależało na nowoczesnym wyglądzie, oraz wydajności strony. Byłem odpowiedzialny za projektowanie UI, oraz kodowałem stronę w formie aplikacji SPA. Jako frontend wybrałem React i Next.js, a korzystałem z headless WP jako panel do zarządzanie restauracji.",
    myRole: ["projekt strony", "web development"],
    stack: [
      "HTML",
      "javascript",
      "WordPress Rest API",
      "react",
      "Next.js",
      "tailwind CSS",
      "vercel",
    ],
    gitUrl: "https://github.com/franckyi/hassan-website",
    liveUrl: "https://www.kebab-hassan.pl/",
    designUrl: null,
  },
  {
    title: "wydajna aplikacja dla miłośników NBA",
    client: "Basket Maniacs",
    business: "Sport",
    imgUrl: "/img/bm.webp",
    desc: "Aplikacja frontendowa która wyświetli ostatnie wyniki meczów, wiadomości, listę zawodników i klubów ze świata NBA. Korzysta z architektury REST Api.",
    myRole: ["UI/UX design", "SPA development"],
    stack: ["angular", "typescript", "RxJs"],
    gitUrl: "https://github.com/franckyi/basket-maniacs-app",
    liveUrl: "https://basketmaniacs.francky.works",
    designUrl:
      "https://www.figma.com/file/zXa5Q8IpAgz19Uqle2R4NH/Serwis-NBA?type=design&node-id=0%3A1&mode=design&t=QtLDPxJ0HFTGQ87l-1",
  },
  {
    title: "nowy projekt strony",
    client: "Godere.pl",
    business: "Technologia",
    imgUrl: "/img/godere.webp",
    desc: "Zaprojektowałem i tworzyłem nowoczesną stronę internetową dla firmy Godere, zajmującą się projektowaniem, oraz sprzedażą nietypowych, wydajnych komputerów zbudowanych z klocków Lego. Zaprojektowałem również logo i wizytówki.",
    myRole: ["logo", "wizytówki", "projekt strony", "web development"],
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
    title: "redesign strony głównej",
    client: "Niimbot.pl",
    business: "Technologia",
    imgUrl: "/img/nii.webp",
    desc: "Niimbot.pl jest polskim leaderem w sprzedażu drukarki etykiet. Wykonałem redesign strony głównej. Celem było polepszenie user experience, unowocześnienie strony pod kątem wizualnym, oraz poprawienie kolorystyki. Poprawiłem strukturę strony, dzielając na sekcje, poprawiłem styl, dodałem nowoczesne komponenty webowe takie jak karuzele, transitions i drobne efekty.",
    myRole: ["website redesign", "web development"],
    stack: ["wordPress", "WooCommerce", "CSS"],
    gitUrl: null,
    liveUrl: "https://niimbot.pl",
    designUrl: null,
  },
  {
    title: "sklep internetowy dla wojowników",
    client: "Daddy's DSGN",
    business: "odzież i moda",
    imgUrl: "/img/daddys.webp",
    desc: "Daddy's DSGN ręcznie produkuje odzież i akcesoria stylu warriors. Zaprojektowałem i tworzyłem stronę e-commerce gdzie m.i. marka sprzedaje kraftowe combat shirt'y, bluzy, t-shirty i inne ubrania dla pasjonatów fitness, sportu, działania w myślistwie, w nurkowaniu, w strzelectwie itd.",
    myRole: ["UI/UX design", "custom WordPress theme"],
    stack: ["figma", "wordPress", "PHP", "CSS", "wooCommerce"],
    gitUrl: null,
    liveUrl: "https://daddys.pl",
    designUrl:
      "https://www.figma.com/file/IAJYrobSn8iRPy3q6J6boO/Daddys-ecommerce?type=design&mode=design&t=hSwubaL4lxEmMaJE-1",
  },
  {
    title: "nowoczesna strona firmowa",
    client: "Classic Meble",
    business: "kuchnie i meble",
    imgUrl: "/img/cm.webp",
    desc: "Tworzyłem nowoczesną stronę internetową dla sklepu z meblami. Firma produkuje kuchnie i meble na wymiar, oraz sprzedaje własne produkty oferując bezpłatne transport na terenie Trójmiasta. Firmie zależało aby strona przekazywała dla odbiorcy elegancję i profesjonalność własnej marki.",
    myRole: ["web development"],
    stack: ["wordPress", "PHP", "CSS", "Bootstrap"],
    gitUrl: null,
    liveUrl: "https://classicmeble.pl/",
    designUrl: null,
  },
  {
    title: "szybka witryna internetowa",
    client: "G-BIZ Księgowość",
    business: "Księgowość",
    imgUrl: "/img/gbiz.webp",
    desc: "G-Biz od wielu lat oferuje własne usługi księgowości na terenie Trójmiasta. Dla firmy zaprojektowałem logo i wizytówki, oraz tworzyłem stronę internetową stylu one-page. Założeniem tworzenia strony było, aby strona była intuicyjna, czytelna, łatwa do nawigacji, a bardzo ważne - szybka w ładowaniu. Tworząc strony używałem nowoczesnych komponentów korzystając z HTML, CSS i trochę JavaScriptu.",
    myRole: ["web development", "logo", "wizytówki"],
    stack: ["HTML", "CSS", "JavaScript", "illustrator"],
    gitUrl: "https://github.com/franckyi/gbiz",
    liveUrl: "http://g-biz.pl",
    designUrl: "https://www.behance.net/gallery/70245947/G-BIZ-Logo-Website",
  },
  {
    title: "strona internetowa",
    client: "Dla Maluszka",
    business: "Edukacja",
    imgUrl: "/img/dm.webp",
    desc: "Żłobek Maluszka w Warszawie potrzebował odświeżyć wygląd swojej strony internetowej. Stworzyłem spersonalizowany szablon dla istniejącej witryny w WordPress, używając PHP, HTML5 i CSS.",
    myRole: ["Custom WordPress theme"],
    stack: ["WordPress", "PHP", "CSS"],
    gitUrl: null,
    liveUrl: "https://dlamaluszka.waw.pl/",
    designUrl: null,
  },
  {
    title: "dedykowana strona firmowa",
    client: "Sauber Serwis",
    business: "usługi",
    imgUrl: "/img/sauber.webp",
    desc: "Zaprojektowałem logo i dedykowaną stronę internetową dla firmy Sauber Serwis, która oferuje efektowne usługi sprzątania, zakładanie i pielęgnację ogrodów, oraz wypożyczaniem sprzętów.",
    myRole: ["logo", "UI/UX design", "web development"],
    stack: ["affinity designer", "wordPress"],
    gitUrl: null,
    liveUrl: "http://sauberserwis.pl/",
    designUrl: null,
  },
  {
    title: "pogoda z live'm tłem",
    client: "Meteo Livebg",
    business: "Styl życia",
    imgUrl: "/img/meteo.webp",
    desc: getJobDesc("Meteo Livebg"),
    myRole: ["web application development"],
    stack: ["javaScript", "CSS", "API"],
    gitUrl: "https://github.com/franckyi/meteo-livebg-web-app",
    liveUrl: "https://meteo.francky.works",
    designUrl: null,
  },
  {
    title: "minitool",
    client: "Seconds formatter",
    business: "Utilities",
    imgUrl: "/img/sec.webp",
    desc: "Minitool która przejmuje ilość sekund i zwróci ilość czasu w czytelnym formacie dla użytkownika.",
    myRole: ["web application development"],
    stack: ["javaScript"],
    gitUrl: "https://github.com/franckyi/seconds-formatter",
    liveUrl: "https://secondsformatter.francky.works/",
    designUrl: null,
  },
  {
    title: "responsywna strona ślubu",
    client: "Tiffania & Justin",
    business: "Styl życia",
    imgUrl: "/img/jt.webp",
    desc: "Witryna internetowa z countdown'em do dnia ślubu. Celem był dostarczyć i wyświetlić poprawnie na telefonie ważne informacje na temat ślubu, niezaleźnie od urządzenia użytkownika.",
    myRole: ["UI/UX design", "web development"],
    stack: ["HTML", "CSS", "javaScript"],
    gitUrl: "https://github.com/franckyi/justinandtiffania.com",
    liveUrl: "https://justinandtiffania.com/",
    designUrl: null,
  },
];

export default workList;
