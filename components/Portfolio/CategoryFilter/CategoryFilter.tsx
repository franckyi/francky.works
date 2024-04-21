"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Works from "../Works";
import { Work } from "@/types/Work";
import { categories } from "./categories";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function CategoryFilter({ works }: { works: Work[] }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    console.log("works", works);
    // console.log("works", works.filter((work) => work.categoryId === 1));
  });

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {categories.map((category) => {
            return (
              <Tab
                className="text-light"
                key={category.id}
                label={category.label}
                {...a11yProps(category.id)}
              />
            );
          })}
        </Tabs>
      </Box>

      {categories.map((category) => {
        return (
          <CustomTabPanel key={category.id} value={value} index={category.id}>
            <Works works={works} category={category} />
          </CustomTabPanel>
        );
      })}
    </Box>
  );
}
