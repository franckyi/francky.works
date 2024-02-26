import AppBar from "./ui/AppBar";
import Hero from "./ui/Hero";
import WorkList from "./ui/WorkList/WorkList";
import Footer from "./ui/Footer";

export default function Home() {
  return (
    <>
      <main className="p-4 bg-slate-900">
        <section className="lg:min-h-screen">
          <AppBar />
          <Hero />
        </section>
        <h2 className="my-8 text-3xl lg:text-5xl font-bold text-emerald-400 text-center">
          Moje realizacje
        </h2>
        <WorkList />
      </main>
      <Footer />
    </>
  );
}
