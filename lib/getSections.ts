require("dotenv").config();

const TIME_INTERVAL = 86400; // revalidate every 24 h
const URL = "https://k3g9inpr433.francky.works/wp-json/wp/v2/sections";

export default async function getSections() {
  if (!URL) {
    throw new Error(
      "SECTIONS_ENDPOINT is not defined in the environment variables"
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
