// import Image from "next/image";
import AppBar from "./components/AppBar";
import WorkList from "./components/WorkList/WorkList";

const introText =
  "Nazywam się Francky Iside. Jestem web developerem z Gdańska. Specjalizuję się w projektowaniu,  oraz w tworzeniu stron internetowych i aplikacji web. Wykorzystuję technologie TypeScript, Php, React, Wordpress i Next.js.";

export default function Home() {
  return (
    <main className="min-h-screen px-24 pt-4 bg-slate-900">
      <AppBar />
      <p className="text-lg dark:text-slate-300">{introText}</p>
      <h2 className="text-4xl font-bold text-emerald-400 mt-8 mb-16 text-center">
        Moje realizacje
      </h2>
      <WorkList />
    </main>
  );
}
