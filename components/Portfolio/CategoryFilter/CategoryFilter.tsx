import * as React from "react";

import Works from "../Works";
import { Work } from "@/types/Work";
import { Tag } from "@/types/Tag";
import { useEffect, useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

type CategoryFilterProps = {
  works: Work[];
  tags: Tag[];
  handleTagsChange: (tags: number[]) => void;
  handleCategoryChange: (categories: string) => void;
};

export default function CategoryFilter({
  works,
  tags,
  handleTagsChange,
  handleCategoryChange,
}: CategoryFilterProps) {
  const [activeTags, setActiveTags] = useState<number[]>([]);
  const [alignment, setAlignment] = React.useState("48");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };

  useEffect(() => {
    handleTagsChange(activeTags);
  }, [activeTags, handleTagsChange]);

  useEffect(() => {
    handleCategoryChange(alignment);
  }, [alignment, handleCategoryChange]);

  function handleActiveTagsChange(id: number | null) {
    if (id !== null && activeTags.includes(id)) {
      setActiveTags(activeTags.filter((tag) => tag !== id));
    } else if (id !== null) {
      setActiveTags([...activeTags, id]);
    } else {
      setActiveTags([]);
    }
  }

  return (
    <>
      <ToggleButtonGroup
        color="secondary"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
        className="mb-8 flex-wrap justify-center gap-2 lg:gap-0"
      >
        <ToggleButton
          className="dark:text-light dark:border-2 dark:border-medium"
          value="48"
        >
          All
        </ToggleButton>
        <ToggleButton
          className="dark:text-light dark:border-2 dark:border-medium"
          value="8"
        >
          Web Development
        </ToggleButton>
        <ToggleButton
          className="dark:text-light dark:border-2 dark:border-medium"
          value="7"
        >
          UI/UX
        </ToggleButton>
        <ToggleButton
          className="dark:text-light dark:border-2 dark:border-medium"
          value="39"
        >
          Graphics
        </ToggleButton>
        <ToggleButton
          className="dark:text-light dark:border-2 dark:border-medium"
          value="46"
        >
          Plugins
        </ToggleButton>
        <ToggleButton
          className="dark:text-light dark:border-2 dark:border-medium"
          value="38"
        >
          Mini Projects
        </ToggleButton>
      </ToggleButtonGroup>

      <Works
        works={works}
        tags={tags}
        activeTags={activeTags}
        handleActiveTagsChange={handleActiveTagsChange}
        activeTagsLength={activeTags.length}
      />
    </>
  );
}
