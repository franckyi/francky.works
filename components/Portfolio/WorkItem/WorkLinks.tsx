const buttonStyle =
  "py-2 px-4 mr-4 border-2 border-b-8 border-slate-500 dark:border-slate-600 hover:border-slate-900 dark:hover:border-emerald-400 dark:text-slate-200 font-bold hover:rotate-6";

type WorkMeta = { live: string; code: string; design: string };

export default function WorkLinks({ meta }: { meta: WorkMeta }) {
  return (
    <div className="my-6 whitespace-nowrap lg:whitespace-normal text-xs lg:text-base">
      {meta.live && (
        <a
          href={meta.live}
          className={buttonStyle}
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          Live
        </a>
      )}

      {meta.code && (
        <a
          href={meta.code}
          className={buttonStyle}
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          Code {"<>"}
        </a>
      )}

      {meta.design && (
        <a
          href={meta.design}
          className={buttonStyle}
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          Design
        </a>
      )}
    </div>
  );
}
