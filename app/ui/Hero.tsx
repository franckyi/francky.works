import Image from "next/image";
import "./Hero/hero.css";

const introText =
  "Witaj na mojej witrynie internetowej! Nazywam się Francky Iside. Jestem frontend developerem specjalizującym się w projektowaniu responsywnych, wydajnych stron internetowych, aplikacji SPA i sklepów eCommerce. Wykorzystuję technologie TypeScript, React, Next.js, Php, oraz WordPress. Jestem gotów podjąć się nowych wyzwań, dlatego zapraszam do kontaktu firm poszukujących developera do wzmocnienia własnego zespołu, jak i agencje poszukujących freelancerów do współpracy. Oferuję kreatywne podejście do projektu, tworząc innowacyjne i funkcjonalne rozwiązania. Poniżej udostępniłem kilka wybranych realizacji. Nie zapominaj odwiedzieć mój profil Linkedin i zapraszam do kontaktu!";

export default function Hero() {
  return (
    <div className="lg:mx-24 flex gap-8 flex-col lg:flex-row lg:items-center justify-center">
      <Image
        src="/img/hero.webp"
        className="avatar-shape"
        width={500}
        height={500}
        alt="Francky"
        draggable="false"
        priority
      />
      <div className="max-lg:bottom-0 lg:-bottom-2">
        <div className="max-lg:text-2xl lg:text-5xl font-bold text-emerald-400 font-secondary">
          Francky Iside
        </div>
        <div className="mt-4 mb-8 max-lg:text-xl lg:text-4xl text-slate-400">
          React developer
        </div>
        <p className="max-w-screen-xl lg:mx-auto text-lg dark:text-slate-500">
          {introText}
        </p>
      </div>
    </div>
  );
}
