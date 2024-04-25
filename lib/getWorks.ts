const TIME_INTERVAL = 86400; // revalidate every 24 h
const BASEURL = "https://k3g9inpr433.francky.works/wp-json/wp/v2/works";
const VIEW = "?per_page=100&order=asc";

export default async function getWorks() {
  // export default async function getWorks(tags: number[] = []) {
  // const TAGS = tags.length > 0 ? `&tags=${tags}` : null;
  // const URL = BASEURL + VIEW + TAGS;
  const res = await fetch(BASEURL + VIEW, {
    next: { revalidate: TIME_INTERVAL },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
