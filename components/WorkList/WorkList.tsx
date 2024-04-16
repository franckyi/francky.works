"use client";
import TableRowsSharpIcon from "@mui/icons-material/TableRowsSharp";
import ViewModuleSharpIcon from "@mui/icons-material/ViewModuleSharp";
import { Work } from "@/types/Work";
import WorkItem from "./WorkItem/WorkItem";
import getWorks from "@/lib/getWorks";
import { useEffect, useState } from "react";

const sectionClasses = "max-w-screen-xl lg:mx-auto";
const headingClasses =
  "lg:mt-32 my-8 text-3xl lg:text-5xl font-bold dark:text-emerald-400 text-center font-secondary";

export default function WorkList() {
  // const works = await getWorks();
  // const [display, setDisplay] = useState("list");
  const [works, setWorks] = useState<Work[]>([]);

  useEffect(() => {
    getWorks().then((works) => {
      setWorks(works);
    });
  }, []);

  return (
    <>
      <h2 className={headingClasses}>Recent Works</h2>
      <div className="text-center mt-20 mb-0">
        <TableRowsSharpIcon />
        <ViewModuleSharpIcon />
      </div>
      <section className={sectionClasses}>
        {works &&
          works.map((work: Work) => {
            return <WorkItem key={work.id} work={work} />;
          })}
      </section>
    </>
  );
}
