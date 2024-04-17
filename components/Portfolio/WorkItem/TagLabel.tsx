"use client";
import getTag from "@/lib/getTag";
import { useEffect, useState } from "react";

const classes =
  "my-1 inline-block mr-2 lg:mr-4 px-4 pt-1 pb-2 text-xs lg:text-sm capitalize bg-slate-500 dark:bg-slate-800 text-slate-200";

export default function TagLabel({ tagId }: { tagId: number }) {
  const [tag, setTag] = useState<any>(null);

  useEffect(() => {
    getTag(tagId).then((data) => {
      setTag(data);
    });
  }, [tagId]);

  return <span className={classes}>{tag?.name}</span>;
}
