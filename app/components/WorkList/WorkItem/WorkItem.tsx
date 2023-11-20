import Image from "next/image";
import IWork from "@/app/types/IWork";

export default function WorkItem({ work }: IWork) {
  return (
    <article className="my-12 lg:my-24 lg:flex gap-8 rounded-sm saturate-100">
      <Image
        src={work.imgUrl}
        alt={work.title}
        className="lg:w-2/4 my-8 rounded-3xl shadow-xl shadow-slate-950"
        width={645}
        height={365}
        draggable="false"
      />
      <div className="lg:w-2/4">
        <h3 className="mb-2 text-3xl text-slate-200 font-semibold">
          <span className="text-emerald-400">{work.client}</span> — {work.title}
        </h3>

        {work.business && (
          <span className="text-sm text-slate-500 capitalize">
            {work.business}
          </span>
        )}

        {work.desc && <p className="mt-4 mb-4 text-slate-300">{work.desc}</p>}

        {work.myRole && (
          <>
            <h4 className="my-4 font-semibold text-emerald-400 uppercase text-xs">
              Zakres
            </h4>
            {work.myRole.map((role, index) => {
              return (
                <div className="w-full my-1 lg:inline-block lg:mr-4 px-4 pt-1 pb-2 bg-slate-800 text-sm text-slate-300 capitalize">
                  {role}
                </div>
              );
            })}
          </>
        )}

        {work.stack && (
          <>
            <h4 className="my-4 font-semibold text-emerald-400 uppercase text-xs">
              Technologie
            </h4>
            {work.stack.map((item, index: number) => {
              return (
                <div
                  key={index}
                  className="w-full my-1 lg:inline-block lg:mr-4 px-4 pt-1 pb-2 text-sm bg-slate-800 capitalize text-slate-300"
                >
                  {item}
                </div>
              );
            })}
          </>
        )}

        <div className="my-6">
          {work.liveUrl && (
            <a
              href={work.liveUrl}
              className="py-2 px-4 text-slate-900 font-bold bg-emerald-400 hover:bg-amber-400 rounded-full hover:rotate-6 transition ease-in-out duration-150 hover:rounded-sm"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Strona live
            </a>
          )}

          {work.gitUrl && (
            <a
              href={work.gitUrl}
              className="ml-4 py-2 px-4 text-slate-900 font-bold bg-emerald-400 hover:bg-amber-400 rounded-full hover:rotate-6 transition ease-in-out duration-150 hover:rounded-sm"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Kod {"<>"}
            </a>
          )}

          {work.designUrl && (
            <a
              href={work.designUrl}
              className="ml-4 py-2 px-4 text-slate-900 font-bold bg-emerald-400 hover:bg-amber-400 rounded-full hover:rotate-6 transition ease-in-out duration-150 hover:rounded-sm"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Projekty
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
