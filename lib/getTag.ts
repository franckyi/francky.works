export default async function getTag(id: number) {
  const res = await fetch(process.env.API_BASE_URL + "/wp-json/wp/v2/tags/" + id);

  if (!res.ok) {
    throw new Error("Failed to fetch tag");
  }

  return res.json();
}
