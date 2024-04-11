export default async function getMedia(href: string) {
  if (!href) {
    throw new Error("The requested URL is not defined or not valid.");
  }

  const res = await fetch(href);

  if (!res.ok) {
    throw new Error("Failed to fetch media");
  }

  return res.json();
}
