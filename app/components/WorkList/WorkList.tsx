import workList from "./works";
import WorkItem from "./WorkItem/WorkItem";

export default function WorkList() {
  return (
    <section>
      {workList &&
        workList.map((item, index) => {
          return <WorkItem key={index} work={item} />;
        })}
    </section>
  );
}
