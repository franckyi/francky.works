import parse from "html-react-parser";
import getSections from "@/lib/getSections";
import Section from "@/types/Section";
import Image from "next/image";
import "./hero.css";
import "@/app/animate-pulse.css";

export default async function Hero() {
  const sections = await getSections();
  const bio = sections.filter((section: Section) => section.slug === "bio");

  return (
    <section className="lg:mx-40 xl:mx-80 flex gap-8 lg:gap-16 flex-col lg:flex-row lg:items-center justify-center">
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
        <div className="max-lg:text-2xl lg:text-5xl font-bold dark:text-emerald-400 font-secondary hover:animate-pulse">
          <span className="text-slate-500 animate-pulse">{"<"}</span>
          {bio[0].meta.full_name}
          <span className="text-slate-500 animate-pulse">{" />"}</span>
        </div>
        <div className="mt-4 mb-8 max-lg:text-xl lg:text-2xl dark:text-slate-400">
          {bio[0].meta.job_position}
        </div>
        {parse(bio[0].content.rendered)}
      </div>
    </section>
  );
}
