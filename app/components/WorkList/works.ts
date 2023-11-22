import IWork from "@/app/types/IWork";

let workList: IWork[] = [
  {
    title: "nowy projekt strony",
    client: "Godere.pl",
    business: "Technologia",
    imgUrl: "/img/godere.webp",
    desc: "Zaprojektowałem i tworzyłem nowoczesną stronę internetową dla firmy Godere, zajmującą się projektowaniem, oraz sprzedażą nietypowych, wydajnych komputerów zbudowanych z klocków Lego. Zaprojektowałem również logo i wizytówki.",
    myRole: ["logo", "UI/UX design", "web development"],
    stack: [
      "inkscape",
      "Affinity Designer",
      "angular",
      "typescript",
      "Angular Material",
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
    myRole: ["UI/UX design", "web development"],
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
    stack: ["wordpress", "PHP", "CSS", "Bootstrap"],
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
    title: "wydajna aplikacja dla miłośników NBA",
    client: "Basket Maniacs",
    business: "Sport",
    imgUrl: "/img/bm.webp",
    desc: "Aplikacja frontendowa która wyświetli ostatnie wyniki meczów, wiadomości, listę zawodników i klubów ze świata NBA. Korzysta z architektury REST Api.",
    myRole: ["UI/UX design", "web application development"],
    stack: ["angular", "typescript", "RxJs"],
    gitUrl: "https://github.com/franckyi/basket-maniacs-app",
    liveUrl: "https://francky.works/basket-maniacs",
    designUrl:
      "https://www.figma.com/file/zXa5Q8IpAgz19Uqle2R4NH/Serwis-NBA?type=design&node-id=0%3A1&mode=design&t=QtLDPxJ0HFTGQ87l-1",
  },
  {
    title: "dedykowana strona firmowa",
    client: "Sauber Serwis",
    business: "usługi",
    imgUrl: "/img/sauber.webp",
    desc: "Zaprojektowałem logo i dedykowaną stronę internetową dla firmy Sauber Serwis, która oferuje efektowne usługi sprzątania, zakładanie i pielęgnację ogrodów, oraz wypożyczaniem sprzętów.",
    myRole: ["logo", "UI/UX design", "web development"],
    stack: ["affinity designer", "wordpress"],
    gitUrl: null,
    liveUrl: "http://sauberserwis.pl/",
    designUrl: null,
  },
  {
    title: "pogoda z live'm tłem",
    client: "Meteo Livebg",
    business: "Styl życia",
    imgUrl: "/img/meteo.webp",
    desc: "Aplikacja pogody ze zmieniającym się tłem.",
    myRole: ["web application development"],
    stack: ["javaScript", "CSS"],
    gitUrl: "https://github.com/franckyi/weather-app-vanilla-js",
    liveUrl: "https://francky.works/weather-app",
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
    liveUrl: "https://francky.works/seconds-formatter/",
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
