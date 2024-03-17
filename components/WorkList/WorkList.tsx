import { Work } from "@/types/Work";
import { worksHeading, workList } from "../../data/works";
import WorkItem from "./WorkItem/WorkItem";

const sectionClasses = "max-w-screen-xl lg:mx-auto";
const headingClasses =
  "my-8 text-3xl lg:text-5xl font-bold dark:text-emerald-400 text-center font-secondary";

export default function WorkList() {
  return (
    <section className={sectionClasses}>
      <h2 className={headingClasses}>{worksHeading}</h2>
      {workList &&
        workList.map((item: Work) => {
          return <WorkItem key={item.id} work={item} />;
        })}
    </section>
  );
}
