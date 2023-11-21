import Image from "next/image";
import IWork from "@/app/types/IWork";

interface IWorkItemProps {
  work: IWork;
}

export default function WorkItem({ work }: IWorkItemProps) {
  return (
    <article className="my-12 lg:my-24 lg:flex lg:items-center gap-8 rounded-sm saturate-100">
      <Image
        src={work.imgUrl}
        alt={work.title}
        className="my-8 rounded-md lg:rounded-2xl shadow-xl shadow-slate-950"
        width={645}
        height={365}
        draggable="false"
      />
      <div className="lg:w-2/4">
        <h3 className="mb-2 text-2xl lg:text-3xl text-slate-200 font-semibold">
          <span className="text-emerald-400">{work.client}</span> — {work.title}
        </h3>

        {work.business && (
          <span className="text-sm text-slate-500 uppercase">
            {work.business}
          </span>
        )}

        {work.desc && (
          <p className="mt-4 mb-4 text-justify text-slate-300">{work.desc}</p>
        )}

        {work.myRole && (
          <>
            <h4 className="my-4 lg:inline lg:mr-4 font-semibold text-emerald-400 text-xs lg:text-lg">
              Moja rola
            </h4>
            {work.myRole.map((role, index) => {
              return (
                <span className="my-1 lg:inline-block mr-2 lg:mr-4 px-4 pt-1 pb-2 bg-slate-800 text-xs lg:text-sm text-slate-200 capitalize">
                  {role}
                </span>
              );
            })}
          </>
        )}

        {work.stack && (
          <div className="my-4">
            <h4 className="inline mr-4 font-semibold text-emerald-400 text-xs lg:text-lg">
              Technologie
            </h4>
            {work.stack.map((item, index: number) => {
              return (
                <span
                  key={index}
                  className="my-1 inline-block mr-2 lg:mr-4 px-4 pt-1 pb-2 text-xs lg:text-sm bg-slate-800 capitalize text-slate-200"
                >
                  {item}
                </span>
              );
            })}
          </div>
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
