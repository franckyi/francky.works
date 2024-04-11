export default async function getCategory(id: number) {
  const res = await fetch(
    "https://k3g9inpr433.francky.works/wp-json/wp/v2/categories/" + id
  );

  if (!res.ok) {
    throw new Error("Failed to fetch category");
  }

  return res.json();
}
