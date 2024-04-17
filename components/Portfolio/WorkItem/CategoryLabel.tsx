"use client";
import getCategory from "@/lib/getCategory";
import { useEffect, useState } from "react";

const classes =
  "my-1 inline-block mr-2 lg:mr-4 px-4 pt-1 pb-2 text-xs lg:text-sm bg-slate-500 dark:bg-slate-800 text-slate-200 capitalize";

export default function CategoryLabel({ categoryId }: { categoryId: number }) {
  const [category, setCategory] = useState<any>(null);

  useEffect(() => {
    getCategory(categoryId).then((data) => {
      setCategory(data);
    });
  }, [categoryId]);

  return <span className={classes}>{category?.name}</span>;
}
