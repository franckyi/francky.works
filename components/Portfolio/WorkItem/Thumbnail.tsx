"use client";
import getMedia from "@/lib/getMedia";
import Image from "next/image";
import { useEffect, useState } from "react";

const baseClasses =
  "my-8 rounded-md lg:rounded-2xl shadow-xl shadow-slate-400 dark:shadow-slate-950";
type ThumbnailProps = { href: string; alt: string; view: string };

export default function Thumbnail({ href, alt, view }: ThumbnailProps) {
  const [thumbnail, setThumbnail] = useState<any>(null);

  useEffect(() => {
    getMedia(href).then((data) => {
      setThumbnail(data);
    });
  }, [href]);

  return (
    <Image
      src={thumbnail?.media_details?.sizes?.medium_large?.source_url}
      alt={alt}
      className={`${baseClasses} ${view === "grid" ? "" : ""}`}
      width={645}
      height={365}
      draggable="false"
    />
  );
}
