import Image from "next/image";
import IWork from "@/app/types/IWork";

interface IWorkItemProps {
  work: IWork;
}

const workItemClasses =
  "my-12 lg:my-24 lg:flex lg:items-center gap-8 lg:gap-16 rounded-sm saturate-100";

export default function WorkItem({ work }: IWorkItemProps) {
  return (
    <article className={workItemClasses}>
      <Image
        src={work.imgUrl}
        alt={work.title}
        className="my-8 rounded-md lg:rounded-2xl shadow-xl shadow-slate-950"
        width={645}
        height={365}
        draggable="false"
      />
      <div className="lg:w-2/4">
        <h3 className="mb-2 text-2xl lg:text-2xl text-slate-200 font-semibold font-secondary">
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
          <div className="my-4 lg:flex lg:items-center flex-wrap">
            <h4 className="lg:inline lg:mr-4 font-semibold text-emerald-400 text-xs lg:text-base">
              My role
            </h4>
            {work.myRole.map((role: string, index: number) => {
              return (
                <span
                  className="my-1 inline-block mr-2 lg:mr-4 px-4 pt-1 pb-2 bg-slate-800 text-xs lg:text-sm text-slate-200 capitalize"
                  key={index}
                >
                  {role}
                </span>
              );
            })}
          </div>
        )}

        {work.stack && (
          <div className="my-4 lg:flex flex-wrap lg:items-center">
            <h4 className="lg:inline lg:mr-4 font-semibold text-emerald-400 text-xs lg:text-base">
              Tecnologies
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

        <div className="my-6 whitespace-nowrap lg:whitespace-normal text-xs lg:text-base">
          {work.liveUrl && (
            <a
              href={work.liveUrl}
              className="py-2 px-4 text-slate-900 font-bold bg-emerald-400 ease-in transition duration-250 hover:bg-amber-400 rounded-full hover:rotate-6 hover:rounded-md"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Live
            </a>
          )}

          {work.gitUrl && (
            <a
              href={work.gitUrl}
              className="ml-4 py-2 px-4 text-slate-900 font-bold bg-emerald-400 transition ease-in duration-250 hover:bg-amber-400 rounded-full hover:rotate-6 hover:rounded-md"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Code {"<>"}
            </a>
          )}

          {work.designUrl && (
            <a
              href={work.designUrl}
              className="ml-4 py-2 px-4 text-slate-900 font-bold bg-emerald-400 transition ease-in duration-500 hover:bg-amber-400 rounded-full hover:rotate-6 hover:rounded-sm"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Design
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
