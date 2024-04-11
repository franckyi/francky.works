export default async function getTag(id: number) {
  const res = await fetch(
    "https://k3g9inpr433.francky.works/wp-json/wp/v2/tags/" + id
  );

  if (!res.ok) {
    throw new Error("Failed to fetch tag");
  }

  return res.json();
}
