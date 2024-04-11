export default async function getCategory(id: number) {
  const URL = `https://k3g9inpr433.francky.works/wp-json/wp/v2/categories/${id}`;
  const res = await fetch(URL);

  if (!res.ok) {
    throw new Error("Failed to fetch category");
  }

  return res.json();
}
