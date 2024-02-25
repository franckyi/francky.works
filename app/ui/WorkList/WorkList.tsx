import workList from "./works";
import WorkItem from "./WorkItem/WorkItem";
import IWork from "@/app/types/IWork";

export default function WorkList() {
  return (
    <section className="max-w-screen-xl lg:mx-auto">
      {workList &&
        workList.map((item: IWork, index: number) => {
          return <WorkItem key={index} work={item} />;
        })}
    </section>
  );
}
