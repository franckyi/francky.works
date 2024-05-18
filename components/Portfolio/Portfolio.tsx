"use client";
import getWorks from "@/lib/getWorks";
import CategoryFilter from "./CategoryFilter/CategoryFilter";
import getTagList from "@/lib/getTagList";
import { useEffect, useState } from "react";
import { Work } from "@/types/Work";
import { Tag } from "@/types/Tag";

const heading = {
  text: "Works",
  classes:
    "lg:mt-32 my-8 text-3xl lg:text-5xl font-bold text-primary text-center font-secondary",
};

export default function Portfolio() {
  const [tags, setTags] = useState<Tag[]>([]);
  const [works, setWorks] = useState<Work[]>([]);
  const [activeTags, setActiveTags] = useState<number[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('48');

  useEffect(() => {
    getTagList().then((data) => {
      setTags(data);
    });
  }, []);

  useEffect(() => {
    getWorks(activeTags, activeCategory)
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        setWorks(data);
      })
      .catch((err) => console.log(err));
  }, [activeTags, activeCategory]);

  function handleTagsChange(tags: number[]) {
    console.log("Tags changed");
    setActiveTags(tags);
  }

  function handleCategoryChange(category: string) {
    console.log("Category changed", category);
    setActiveCategory(category);
  }

  return (
    <>
      <h2>active category: {JSON.stringify(activeCategory)}</h2>
      <h2>active tags: {JSON.stringify(activeTags)}</h2>
      <h2 className={heading.classes}>{heading.text}</h2>
      <CategoryFilter
        works={works}
        tags={tags}
        handleTagsChange={handleTagsChange}
        handleCategoryChange={handleCategoryChange}
      />
    </>
  );
}
