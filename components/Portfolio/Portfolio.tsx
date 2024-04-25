import getWorks from "@/lib/getWorks";
import CategoryFilter from "./CategoryFilter/CategoryFilter";
import getTagList from "@/lib/getTagList";

const heading = {
  text: "Works",
  classes:
    "lg:mt-32 my-8 text-3xl lg:text-5xl font-bold text-primary text-center font-secondary",
};


export default async function Portfolio() {
  const works = await getWorks();
  const tags = await getTagList();

  return (
    <>
      <h2 className={heading.classes}>{heading.text}</h2>
      <CategoryFilter works={works} tags={tags} />
    </>
  );
}
