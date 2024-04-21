import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import FaceIcon from "@mui/icons-material/Face";

const chipClasses = "text-light";

const chipList = [
  { id: 0, label: "React", icon: <FaceIcon /> },
  { id: 1, label: "Next.js", icon: <FaceIcon /> },
  { id: 2, label: "Node.js", icon: <FaceIcon /> },
  { id: 3, label: "Angular", icon: <FaceIcon /> },
  { id: 4, label: "Rest API", icon: <FaceIcon /> },
  { id: 5, label: "Headless WordPress", icon: <FaceIcon /> },
  { id: 6, label: "E-commerce", icon: <FaceIcon /> },
  { id: 7, label: "Vanilla JS", icon: <FaceIcon /> },
  { id: 8, label: "HTML/CSS", icon: <FaceIcon /> },
];

export default function TagsFilter() {
  return (
    <Stack direction="row" spacing={1} className="text-light">
      {chipList.map((chip) => {
        return (
          <Chip
            key={chip.id}
            icon={chip.icon}
            label={chip.label}
            className={chipClasses}
            color="primary"
            variant="outlined"
          />
        );
      })}
    </Stack>
  );
}
