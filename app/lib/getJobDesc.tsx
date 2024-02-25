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
  } else if (client === "NORBUD") {
    return (
      <p>
        Odświeżyłem wygląd strony dla firmy budowlanej.
        <ul className="list-disc">
          <li>Nowa kolorystyka strony dopasowana do logo firmy</li>
          <li>Nowy design sekcji Hero</li>
          <li>
            Konfiguracja programowalność content w CMS (PHP, CPT, CFields) do
            wyświetlenia na frontendzie
          </li>
          <li>
            Poprawa widoków Realizacje i Wynajem, dodałem karuzele zdjęć które
            współgrają z galeriami w WordPressie.
          </li>
          <li>Budowałem frontend w React/Next.js.</li>
        </ul>
      </p>
    );
  }
  return null;
}

export default getJobDesc;
