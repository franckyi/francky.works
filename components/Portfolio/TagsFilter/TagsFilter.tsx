import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import FaceIcon from "@mui/icons-material/Face";
import { Tag } from "@/types/Tag";
import Avatar from "@mui/material/Avatar";

const chipClasses = "text-dark dark:text-light";

type TagsFilterProps = {
  tags: Tag[];
};

export default function TagsFilter({ tags }: TagsFilterProps) {
  return (
    <Stack direction="row" flexWrap={"wrap"} spacing={1} gap={1}>
      {tags.map((tag) => {
        let fileName = tag.slug.includes("adobe")
          ? "adobe"
          : tag.slug.includes("affinity")
          ? "affinity"
          : tag.slug.includes("wordpress") || tag.slug.includes("woo")
          ? "wordpress"
          : tag.slug;

        return (
          <Chip
            key={tag.id}
            avatar={
              <Avatar alt={tag.name} src={`/img/icons/${fileName}.svg`} />
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
