import { worksHeading, workList } from "../../data/works";
import WorkItem from "./WorkItem/WorkItem";
import IWork from "@/app/types/IWork";

const sectionClasses = "max-w-screen-xl lg:mx-auto";
const headingClasses =
  "my-8 text-3xl lg:text-5xl font-bold text-emerald-400 text-center font-secondary";

export default function WorkList() {
  return (
    <section className={sectionClasses}>
      <h2 className={headingClasses}>{worksHeading}</h2>
      {workList &&
        workList.map((item: IWork, index: number) => {
          return <WorkItem key={index} work={item} />;
        })}
    </section>
  );
}
