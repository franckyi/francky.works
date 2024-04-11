export default async function getMedia(href: string) {
  const res = await fetch(href);

  if (!res.ok) {
    throw new Error("Failed to fetch media");
  }

  return res.json();
}
