export default async function getCategory(id: number) {
  const res = await fetch(
    process.env.API_BASE_URL + "/wp-json/wp/v2/categories/" + id
  );

  if (!res.ok) {
    throw new Error("Failed to fetch category");
  }

  return res.json();
}
