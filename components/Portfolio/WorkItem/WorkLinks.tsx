const buttonStyle =
  "py-2 px-4 mr-4 border-2 border-b-8 border-primary dark:border-primary hover:border-accent dark:hover:border-accent hover:bg-gradient-to-r from-primary hover:text-light via-secondary to-accent font-bold hover:rotate-6";

type PropTypes = {
  meta: { live: string; code: string; design: string };
  buttonColor: string;
};

export default function WorkLinks({ meta, buttonColor }: PropTypes) {
  let color = "";
  if (buttonColor === "primary") {
    color = "bg-primary";
  }

  return (
    <div className="my-6 whitespace-nowrap lg:whitespace-normal text-xs lg:text-base">
      {meta.live && (
        <a
          href={meta.live}
          className={`${buttonStyle} ${color}`}
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          Live
        </a>
      )}

      {meta.code && (
        <a
          href={meta.code}
          className={`${buttonStyle} ${color}`}
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          Code {"<>"}
        </a>
      )}

      {meta.design && (
        <a
          href={meta.design}
          className={`${buttonStyle} ${color}`}
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          Design
        </a>
      )}
    </div>
  );
}
