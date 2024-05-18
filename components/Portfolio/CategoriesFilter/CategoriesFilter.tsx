import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function CategoriesFilter() {
  const [alignment, setAlignment] = React.useState("all");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="all">All</ToggleButton>
      <ToggleButton value="web">Web Development</ToggleButton>
      <ToggleButton value="ui/ux">UI/UX</ToggleButton>
      <ToggleButton value="graphics">Graphics</ToggleButton>
      <ToggleButton value="plugins">Plugins</ToggleButton>
      <ToggleButton value="mini-projects">Mini Projects</ToggleButton>
    </ToggleButtonGroup>
  );
}
