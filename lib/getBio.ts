import Section from "@/types/Section";

const TIME_INTERVAL = 86400; // revalidate every 24 h
const URL = "https://k3g9inpr433.francky.works/wp-json/wp/v2/sections";

export default async function getBio() {
  const res = await fetch(URL, {
    next: { revalidate: TIME_INTERVAL },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res
    .json()
    .then((data) => data.filter((section: Section) => section.slug === "bio"));
}
