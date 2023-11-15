// import Image from "next/image";
import AppBar from "./components/AppBar";
import WorkList from "./components/WorkList/WorkList";

const introText = `2 years’ programming experience. Experienced with clients and project estimation. Focusing on making a smooth, cross-device and cross-browser user experience, with improved Core Web Vitals and SEO. I’ve worked on projects such as bukmacher-legalny.pl, zkrainynba.com and e-commerce websites.
  I use Linux/VSC, MacOS/PhpStorm and Git/GitHub/BitBucket. I'm a valuable FIFA and table soccer player. I also enjoy charcoal portrait drawing, outdoor workout and kayaking.`;

export default function Home() {
  return (
    <main className="min-h-screen px-24 pt-4 bg-slate-900">
      <AppBar />
      <p className="my-8 text-lg dark:text-slate-400">{introText}</p>
      <h2 className="text-4xl font-bold text-slate-200 my-8 text-center">
        My Projects
      </h2>
      <WorkList />
    </main>
  );
}
