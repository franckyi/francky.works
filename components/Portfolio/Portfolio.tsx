import getWorks from "@/lib/getWorks";
import Works from "./Works";

const heading = {
  text: "Recent Works",
  classes:
    "lg:mt-32 my-8 text-3xl lg:text-5xl font-bold dark:text-emerald-400 text-center font-secondary",
};

export default async function Portfolio() {
  const works = await getWorks();

  return (
    <>
      <h2 className={heading.classes}>{heading.text}</h2>
      <Works works={works} />
    </>
  );
}
