import parse from "html-react-parser";
import Image from "next/image";
import "./hero.css";
import "@/app/animate-pulse.css";
import getBio from "@/lib/getBio";

export default async function Hero() {
  const bio = await getBio();

  return (
    <section className="max-w-screen-xl mx-auto flex gap-8 lg:gap-16 flex-col lg:flex-row lg:items-center justify-center">
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
        <div className="max-lg:text-2xl lg:text-5xl font-bold font-secondary">
          <span className="text-lightGray dark:text-gray animate-pulse">
            {"<"}
          </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
            {bio[0].meta.full_name}
          </span>
          <span className="text-lightGray dark:text-gray animate-pulse">
            {" />"}
          </span>
        </div>
        <div className="mt-4 mb-8 max-lg:text-xl lg:text-2xl text-dark dark:text-light">
          {bio[0].meta.job_position}
        </div>
        <div className="dark:text-lightGray">
          {parse(bio[0].content.rendered)}
        </div>
      </div>
    </section>
  );
}
