function getJobDesc(client: string): string | JSX.Element | null {
  if (client === "Meteo Livebg") {
    return (
      <>
        Aplikacja pogody ze zmieniającym się tłem. Sprawdź również wersję{" "}
        <a
          href="https://meteovue.francky.works/"
          target="_blank"
          rel="noopener noreferrer nofollow"
          title="Wersja Vue"
          className="underline"
        >
          Vue
        </a>{" "}
        oraz{" "}
        <a
          href="https://meteoangular.francky.works/"
          target="_blank"
          rel="noopener noreferrer nofollow"
          title="Wersja Angular"
          className="underline"
        >
          Angular
        </a>
      </>
    );
  }
  return null;
}

export default getJobDesc;
