import AppBar from "./components/AppBar";
import Hero from "./components/Hero";
import WorkList from "./components/WorkList/WorkList";

const introText =
  "Nazywam się Francky Iside. Jestem web developerem z Gdańska. Specjalizuję się w projektowaniu,  oraz w tworzeniu stron internetowych i aplikacji web. Wykorzystuję technologie TypeScript, Php, React, Wordpress i Next.js.";

export default function Home() {
  return (
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
      <WorkList />
    </main>
  );
}
