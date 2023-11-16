import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative mt-12">
      <div className="z-50 absolute bottom-2 -left-12 text-8xl font-bold text-emerald-400">
        <span className="block text-amber-400">design</span>
        <span className="">stronywww</span>
        <span className="text-amber-400">aplikacjeweb</span>
      </div>
      <Image
        src="/hero.webp"
        className="z-10 relative mx-auto"
        width={926}
        height={500}
        alt="Francky"
        draggable="false"
      />
    </div>
  );
}
