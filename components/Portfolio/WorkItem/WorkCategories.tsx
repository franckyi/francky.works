import CategoryLabel from "./CategoryLabel";

const heading = {
  text: "My role",
  classes:
    "lg:inline lg:mr-4 font-semibold dark:text-emerald-400 text-xs lg:text-base",
};

type PropsType = {
  categories: number[];
};

export default function WorkCategories({ categories }: PropsType) {
  return (
    <div className="my-4 lg:flex lg:items-center flex-wrap">
      <h4 className={heading.classes}>{heading.text}</h4>
      {categories.map((id: number) => {
        return <CategoryLabel key={id} categoryId={id} />;
      })}
    </div>
  );
}
