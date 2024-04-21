"use client";
import { Work } from "@/types/Work";
import ViewHandler from "./ViewHandler";
import { useEffect, useState } from "react";
import WorkItem from "./WorkItem/WorkItem";
import TagsFilter from "./TagsFilter/TagsFilter";
import Stack from "@mui/material/Stack";

const sectionClasses = "lg:mx-auto";

type WorkProps = {
  works: Work[];
  category: {
    id: number;
    label: string;
  };
};

export default function Works({ works, category }: WorkProps) {
  const [view, setView] = useState("list");
  const handleListViewClick = () => setView("list");
  const handleGridViewClick = () => setView("grid");
  const [filteredWorks, setFilteredWorks] = useState(works);

  useEffect(() => {
    if (category.id === 0) {
      setFilteredWorks(works);
      // return;
    } else {
      const data = works.filter((work) => work.categories.includes(26));
      setFilteredWorks(data);
      console.log("data", data);
    }
  }, [works, category, filteredWorks]);

  return (
    <>
      <Stack direction="row" spacing={1}>
        <ViewHandler
          handleListViewClick={handleListViewClick}
          handleGridViewClick={handleGridViewClick}
        />
        <TagsFilter />
      </Stack>
      <section
        className={`${sectionClasses} ${
          view === "grid"
            ? "lg:flex lg:flex-wrap lg:gap-4 lg:w-3/3 justify-center"
            : "max-w-screen-xl lg:gap-4"
        }`}
      >
        {filteredWorks.map((work: Work) => {
          return <WorkItem key={work.id} work={work} view={view} />;
        })}
      </section>
    </>
  );
}
