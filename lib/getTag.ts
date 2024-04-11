export default async function getTag(id: number) {
  const URL = `https://k3g9inpr433.francky.works/wp-json/wp/v2/tags/${id}`;
  const res = await fetch(URL);

  if (!res.ok) {
    throw new Error("Failed to fetch tag");
  }

  return res.json();
}
