import { Work } from "@/types/Work";
import ViewHandler from "./ViewHandler";
import { useState } from "react";
import WorkItem from "./WorkItem/WorkItem";
import TagsFilter from "./TagsFilter/TagsFilter";
import Stack from "@mui/material/Stack";
import { Tag } from "@/types/Tag";

const sectionClasses = "lg:mx-auto lg:mt-16";

type WorkProps = {
  works: Work[];
  tags: Tag[];
  activeTags: number[];
  handleActiveTagsChange: (arg0: number | null) => void;
  activeTagsLength: number;
};

export default function Works({
  works,
  tags,
  activeTags,
  handleActiveTagsChange,
  activeTagsLength,
}: WorkProps) {
  const [view, setView] = useState("list");
  const handleListViewClick = () => setView("list");
  const handleGridViewClick = () => setView("grid");

  return (
    <>
      <Stack direction="row" spacing={1}>
        <TagsFilter
          tags={tags}
          activeTags={activeTags}
          handleActiveTagsChange={handleActiveTagsChange}
          activeTagsLength={activeTags.length}
        />
        <ViewHandler
          handleListViewClick={handleListViewClick}
          handleGridViewClick={handleGridViewClick}
        />
      </Stack>
      <section
        className={`${sectionClasses} ${
          view === "grid"
            ? "lg:flex lg:flex-wrap lg:gap-4 lg:w-3/3 justify-center"
            : "max-w-screen-xl lg:gap-4"
        }`}
      >
        {works.length === 0 && <p>No works matching current search filters.</p>}

        {works.map((work: Work) => {
          return <WorkItem key={work.id} work={work} view={view} />;
        })}
      </section>
    </>
  );
}
