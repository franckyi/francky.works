"use client";
import { Work } from "@/types/Work";
import ViewHandler from "./ViewHandler";
import { useState } from "react";
import WorkItem from "./WorkItem/WorkItem";

const sectionClasses = "max-w-screen-xl lg:mx-auto";

export default function Works({ works }: { works: Work[] }) {
  const [view, setView] = useState("list");

  function handleListViewClick() {
    setView("list");
  }

  function handleGridViewClick() {
    setView("grid");
  }

  return (
    <section className={`${sectionClasses}${view}`}>
      <ViewHandler
        handleListViewClick={handleListViewClick}
        handleGridViewClick={handleGridViewClick}
      />
      test: {view}
      {works.map((work: Work) => {
        return <WorkItem key={work.id} work={work} />;
      })}
    </section>
  );
}
