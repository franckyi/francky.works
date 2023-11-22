import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative lg:mt-12">
      <div className="z-50 max-lg:bottom-0 max-lg:text-2xl absolute lg:-bottom-2 lg:text-8xl font-bold text-emerald-400">
        <div className="shadow-stone-950">#stronywww</div>
        <div className="relative max-lg:left-8 lg:left-72 text-amber-400 shadow-stone-950">
          #aplikacjeweb
        </div>
      </div>
      <Image
        src="/img/hero-simple.webp"
        className="z-10 relative mx-auto opacity-50"
        width={926}
        height={500}
        alt="Francky"
        draggable="false"
        priority
      />
    </div>
  );
}
