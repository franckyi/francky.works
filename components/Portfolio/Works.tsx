"use client";
import { Work } from "@/types/Work";
import ViewHandler from "./ViewHandler";
import { useState } from "react";
import WorkItem from "./WorkItem/WorkItem";

const sectionClasses = "lg:mx-auto";

export default function Works({ works }: { works: Work[] }) {
  const [view, setView] = useState("list");

  function handleListViewClick() {
    setView("list");
  }

  function handleGridViewClick() {
    setView("grid");
  }

  return (
    <>
      <ViewHandler
        handleListViewClick={handleListViewClick}
        handleGridViewClick={handleGridViewClick}
      />
      <section
        className={`${sectionClasses} ${
          view === "grid"
            ? "lg:flex lg:flex-wrap lg:gap-1 lg:w-3/3"
            : "max-w-screen-xl lg:gap-4"
        }`}
      >
        {works.map((work: Work) => {
          return <WorkItem key={work.id} work={work} view={view} />;
        })}
      </section>
    </>
  );
}
