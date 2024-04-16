import { Work } from "@/types/Work";
import WorkItem from "./WorkItem/WorkItem";
import getWorks from "@/lib/getWorks";

const sectionClasses = "lg:mt-32 max-w-screen-xl lg:mx-auto";
const headingClasses =
  "my-8 text-3xl lg:text-5xl font-bold dark:text-emerald-400 text-center font-secondary";

export default async function WorkList() {
  const works = await getWorks();

  return (
    <section className={sectionClasses}>
      <h2 className={headingClasses}>Recent Works</h2>
      {works &&
        works.map((work: Work) => {
          return <WorkItem key={work.id} work={work} />;
        })}
    </section>
  );
}
