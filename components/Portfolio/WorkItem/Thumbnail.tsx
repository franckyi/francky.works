import getMedia from "@/lib/getMedia";
import Image from "next/image";
import { useEffect, useState } from "react";
import Skeleton from "@mui/material/Skeleton";

function ThumbnailSkeleton() {
  return (
    <Skeleton variant="rectangular" width={645} height={365} animation="wave" />
  );
}

const baseClasses = "rounded-md lg:rounded-2xl shadow-xl shadow-dark/30 dark:shadow-primary/25";
type ThumbnailProps = {
  href: string;
  alt: string;
  view: string;
  hidden: boolean;
};

export default function Thumbnail({ href, alt, view, hidden }: ThumbnailProps) {
  const [thumbnail, setThumbnail] = useState<any>(null);

  function getOpacity() {
    if (hidden) {
      return "";
    } else {
      return "bg-dark bg-opacity-90";
    }
  }

  function getMargin() {
    return view === "grid" ? "my-0" : "my-8 ";
  }

  useEffect(() => {
    getMedia(href).then((data) => {
      setThumbnail(data);
    });
  }, [href]);

  return thumbnail ? (
    <Image
      src={thumbnail.media_details.sizes.medium_large.source_url}
      alt={alt}
      className={`${baseClasses} ${getMargin()} ${getOpacity()}`}
      width={645}
      height={365}
      draggable="false"
    />
  ) : (
    <ThumbnailSkeleton />
  );
}
