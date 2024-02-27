function getJobDesc(client: string): string | JSX.Element | null {
  if (client === "Meteo Livebg") {
    return (
      <>
        Weather app with live background. Check also other versions made with{" "}
        <a
          href="https://meteovue.francky.works/"
          target="_blank"
          rel="noopener noreferrer nofollow"
          title="made with Vue"
          className="underline"
        >
          Vue
        </a>{" "}
        oraz{" "}
        <a
          href="https://meteoangular.francky.works/"
          target="_blank"
          rel="noopener noreferrer nofollow"
          title="made with Angular"
          className="underline"
        >
          Angular
        </a>
      </>
    );
  } else if (client === "NORBUD") {
    return (
      <p>
        Norbud is a Polish construction company. Tasks:
        <ul className="list-disc">
          <li>Improved color palette, UI/UX, frontend development</li>
          <li>
            Used PHP, CPTs and CFs to program a gallery system in WordPress
            backend () to let client easily manage content to be displayed on
            the frontend.
          </li>
          <li>
            Implemented React carousel library to work with the WordPress CMS.
          </li>
        </ul>
      </p>
    );
  }
  return null;
}

export default getJobDesc;
