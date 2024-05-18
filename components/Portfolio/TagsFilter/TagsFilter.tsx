import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { Tag } from "@/types/Tag";
import Avatar from "@mui/material/Avatar";
import { useContext } from "react";
import ThemeContext from "@/context-api/ThemeContext";
import Button from "@mui/material/Button";
import ClearIcon from "@mui/icons-material/Clear";

const chipClasses = "text-dark dark:text-light";

type TagsFilterProps = {
  tags: Tag[];
  activeTags: number[];
  handleActiveTagsChange: (arg0: number | null) => void;
  activeTagsLength: number;
};

export default function TagsFilter({
  tags,
  activeTags,
  handleActiveTagsChange,
  activeTagsLength,
}: TagsFilterProps) {
  const theme = useContext(ThemeContext);
  const folderName = theme ? "icons-light" : "icons-dark";

  function handleResetTags() {
    handleActiveTagsChange(null);
  }

  return (
    <Stack direction="row" flexWrap={"wrap"} spacing={1} gap={1}>
      {activeTagsLength > 0 && (
        <Button
          onClick={() => handleResetTags()}
          variant="outlined"
          startIcon={<ClearIcon />}
        >
          Reset filters
        </Button>
      )}
      {tags.map((tag) => {
        let fileName = tag.slug.includes("adobe")
          ? "adobe"
          : tag.slug.includes("affinity")
          ? "affinity"
          : tag.slug.includes("wordpress") ||
            tag.slug.includes("woo") ||
            tag.slug.includes("headless")
          ? "wordpress"
          : tag.slug;

        return (
          <Chip
            clickable
            onClick={() => handleActiveTagsChange(tag.id)}
            key={tag.id}
            avatar={
              <Avatar
                alt={tag.name}
                src={`/img/${folderName}/${fileName}.svg`}
              />
            }
            label={tag.name}
            className={chipClasses}
            variant="outlined"
            size="small"
          />
        );
      })}
    </Stack>
  );
}
