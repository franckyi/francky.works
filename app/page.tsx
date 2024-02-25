import AppBar from "./ui/AppBar";
import Hero from "./ui/Hero";
import WorkList from "./ui/WorkList/WorkList";

const introText =
  "Witaj na mojej witrynie internetowej! Nazywam się Francky Iside. Jestem frontend developerem specjalizującym się w projektowaniu responsywnych, wydajnych stron internetowych, aplikacji SPA i sklepów eCommerce. Wykorzystuję technologie TypeScript, React, Next.js, Php, oraz WordPress. Jestem gotów podjąć się nowych wyzwań, dlatego zapraszam do kontaktu firm poszukujących developera do wzmocnienia własnego zespołu, jak i agencje poszukujących freelancerów do współpracy.";

const worksIntroText =
  "Oferuję kreatywne podejście do projektu, tworząc innowacyjne i funkcjonalne rozwiązania. Poniżej udostępniłem kilka wybranych realizacji. Nie zapominaj odwiedzieć mój profil Linkedin i zapraszam do kontaktu!";

const footerText =
  "Francky Iside - Projektowanie Stron Internetowych i Web Development";

export default function Home() {
  return (
    <>
      <main className="p-4 bg-slate-900">
        <section className="lg:min-h-screen">
          <AppBar />
          <p className="lg:w-3/4 text-justify mx-auto text-center text-lg dark:text-slate-300">
            {introText}
          </p>
          <Hero />
        </section>
        <h2 className="my-12 lg:my-16 text-3xl lg:text-5xl font-bold text-emerald-400 text-center">
          Moje realizacje
        </h2>
        <p className="max-w-screen-xl lg:mx-auto">{worksIntroText}</p>
        <WorkList />
      </main>
      <footer className="w-full py-4 bg-slate-900 text-slate-500 text-center border-t-2 border-slate-800">
        {footerText}
      </footer>
    </>
  );
}
