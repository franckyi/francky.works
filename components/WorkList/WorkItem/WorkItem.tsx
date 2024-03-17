import Image from "next/image";

interface Work {
  id: number;
  title: string;
  business: string | null;
  client: string | null;
  imgUrl: string;
  desc: string | JSX.Element | null;
  myRole: string[];
  stack: string[];
  gitUrl: string | null;
  liveUrl: string | null;
  designUrl: string | null;
}

interface IWorkItemProps {
  work: Work;
}

const workItemClasses =
  "my-12 lg:my-24 lg:flex lg:items-center gap-8 lg:gap-16 rounded-sm saturate-100";

const buttonStyle =
  "py-2 px-4 mr-4 border-2 border-b-8 border-slate-500 dark:border-slate-600 hover:border-slate-900 dark:hover:border-emerald-400 dark:text-slate-200 font-bold hover:rotate-6";

export default function WorkItem({ work }: IWorkItemProps) {
  return (
    <article className={workItemClasses}>
      <Image
        src={work.imgUrl}
        alt={work.title}
        className="my-8 rounded-md lg:rounded-2xl shadow-xl shadow-slate-400 dark:shadow-slate-950"
        width={645}
        height={365}
        draggable="false"
      />
      <div className="lg:w-2/4">
        <h3 className="mb-2 text-2xl lg:text-2xl dark:text-slate-200 font-semibold font-secondary">
          <span className="text-emerald-500 dark:text-emerald-400">
            {work.client}
          </span>{" "}
          — {work.title}
        </h3>

        {work.business && (
          <span className="text-sm text-slate-500 uppercase">
            {work.business}
          </span>
        )}

        {work.desc && (
          <p className="mt-4 mb-4 text-justify dark:text-slate-300">
            {work.desc}
          </p>
        )}

        {work.myRole && (
          <div className="my-4 lg:flex lg:items-center flex-wrap">
            <h4 className="lg:inline lg:mr-4 font-semibold dark:text-emerald-400 text-xs lg:text-base">
              My role
            </h4>
            {work.myRole.map((role: string, index: number) => {
              return (
                <span
                  className="my-1 inline-block mr-2 lg:mr-4 px-4 pt-1 pb-2 text-xs lg:text-sm bg-slate-500 dark:bg-slate-800 text-slate-200 capitalize"
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
            <h4 className="lg:inline lg:mr-4 font-semibold dark:text-emerald-400 text-xs lg:text-base">
              Tecnologies
            </h4>
            {work.stack.map((item, index: number) => {
              return (
                <span
                  key={index}
                  className="my-1 inline-block mr-2 lg:mr-4 px-4 pt-1 pb-2 text-xs lg:text-sm capitalize bg-slate-500 dark:bg-slate-800 text-slate-200"
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
              className={buttonStyle}
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Live
            </a>
          )}

          {work.gitUrl && (
            <a
              href={work.gitUrl}
              className={buttonStyle}
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Code {"<>"}
            </a>
          )}

          {work.designUrl && (
            <a
              href={work.designUrl}
              className={buttonStyle}
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
