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
    "max-w-screen-xl mx-auto lg:mt-32 my-8 text-3xl lg:text-5xl font-bold text-primary text-center font-secondary",
};

export default function Portfolio() {
  const [tags, setTags] = useState<Tag[]>([]);
  const [works, setWorks] = useState<Work[]>([]);
  const [activeTags, setActiveTags] = useState<number[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("48");

  useEffect(() => {
    getTagList().then((data) => {
      setTags(data);
    });
  }, []);

  useEffect(() => {
    getWorks(activeTags, activeCategory)
      .then((response) => response.json())
      .then((data) => {
        setWorks(data);
      })
      .catch((err) => console.log(err));
  }, [activeTags, activeCategory]);

  function handleTagsChange(tags: number[]) {
    setActiveTags(tags);
  }

  function handleCategoryChange(category: string) {
    setActiveCategory(category);
  }

  return (
    <>
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
