import Image from "next/image";
import "./hero.css";
import "../animations/animate-pulse.css";
import { heroHeading, heroSubheading, getHeroText } from "../../data/hero";

export default function Hero() {
  return (
    <section className="lg:mx-auto lg:mt-40 lg:w-4/6 flex gap-8 lg:gap-16 flex-col lg:flex-row lg:items-center justify-center">
      <Image
        src="/img/hero.webp"
        className="avatar-shape"
        width={500}
        height={500}
        alt="Francky in photo"
        draggable="false"
        priority
      />
      <div className="max-lg:bottom-0 lg:-bottom-2">
        <div className="max-lg:text-2xl lg:text-5xl font-bold text-emerald-400 font-secondary hover:animate-pulse">
          <span className="text-slate-500 animate-pulse">{"<"}</span>
          {heroHeading}
          <span className="text-slate-500 animate-pulse">{" />"}</span>
        </div>
        <div className="mt-4 mb-8 max-lg:text-xl lg:text-2xl text-slate-400">
          {heroSubheading}
        </div>
        <p className="max-w-screen-xl lg:mx-auto text-lg dark:text-slate-500">
          {getHeroText()}
        </p>
      </div>
    </section>
  );
}
