import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative lg:mt-12">
      <div className="z-50 lg:absolute lg:-bottom-2 lg:-left-12 lg:text-8xl font-bold text-emerald-400">
        <div className="mx-auto shadow-stone-950">#stronywww</div>
        <div className="lg:relative lg:left-72 text-amber-400 shadow-stone-950">
          #aplikacjeweb
        </div>
      </div>
      <Image
        src="/hero-simple.webp"
        className="z-10 relative mx-auto opacity-50"
        width={926}
        height={500}
        alt="Francky"
        draggable="false"
      />
    </div>
  );
}
