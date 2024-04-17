import getMedia from "@/lib/getMedia";
import Image from "next/image";

type ThumbnailProps = { href: string; alt: string };

export default async function Thumbnail({ href, alt }: ThumbnailProps) {
  const thumbnail = await getMedia(href);
  return (
    <Image
      src={thumbnail.media_details.sizes.medium_large.source_url}
      alt={alt}
      className="my-8 rounded-md lg:rounded-2xl shadow-xl shadow-slate-400 dark:shadow-slate-950"
      width={645}
      height={365}
      draggable="false"
    />
  );
}
