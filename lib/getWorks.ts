require("dotenv").config();

const TIME_INTERVAL = 86400; // revalidate every 24 h
const URL =
  "https://k3g9inpr433.francky.works/wp-json/wp/v2/works?per_page=25&order=asc";

export default async function getWorks() {
  if (!URL) {
    throw new Error(
      "WORKS_ENDPOINT is not defined in the environment variables"
    );
  }

  const res = await fetch(URL, {
    next: { revalidate: TIME_INTERVAL },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
