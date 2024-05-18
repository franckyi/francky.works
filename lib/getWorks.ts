const TIME_INTERVAL = 86400; // revalidate every 24 h
const BASEURL = "https://k3g9inpr433.francky.works/wp-json/wp/v2/works";
const VIEW = "?per_page=100&order=asc";

export default function getWorks(
  tags: number[] = [],
  category: string | null = "48"
) {
  const TAGS = tags.length > 0 ? `&tags=${tags}` : "";
  const CATEGORY = category !== null ? `&categories=${category}` : "";
  const URL = BASEURL + VIEW + TAGS + CATEGORY;

  const res = fetch(URL, {
    next: { revalidate: TIME_INTERVAL },
  });

  return res;
}
