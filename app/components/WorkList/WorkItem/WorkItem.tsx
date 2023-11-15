import Image from "next/image";
import IWork from "@/app/types/IWork";

export default function WorkItem({ work }: IWork) {
  return (
    <article className="my-12 flex gap-8 rounded-sm saturate-50 hover:saturate-100">
      <Image
        src={work.imgUrl}
        alt={work.title}
        className="w-2/4 rounded-3xl"
        width={600}
        height={340}
      />
      <div className="w-2/4">
        <h3 className="mb-4 text-3xl font-semibold">{work.title}</h3>
        <span className="text-slate-500">{work.category}</span>
        <p className="mt-8 mb-4">{work.desc}</p>
        <h4 className="font-semibold">My role</h4>
        <p className="mb-8">{work.myRole}</p>
        <h4 className="font-semibold">Technologie</h4>
        <p className="mb-8">{work.stack}</p>
        <a
          href={work.liveUrl}
          className="py-2 px-4 bg-teal-600 hover:bg-teal-500 rounded-full hover:rotate-6"
          target="_blank"
        >
          Zobacz strona live
        </a>
        <a
          href={work.gitUrl}
          className="ml-8 py-2 px-4 bg-teal-600 hover:bg-teal-500 rounded-full hover:rotate-6"
          target="_blank"
        >
          Sprawdź kod
        </a>
      </div>
    </article>
  );
}
