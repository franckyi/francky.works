import getCategory from "@/lib/getCategory";

export default function WorkCategories({
  categories,
}: {
  categories: number[];
}) {
  return (
    <div className="my-4 lg:flex lg:items-center flex-wrap">
      <h4 className="lg:inline lg:mr-4 font-semibold dark:text-emerald-400 text-xs lg:text-base">
        My role
      </h4>
      {categories.map(async (id) => {
        const category = await getCategory(id);
        return (
          <span
            className="my-1 inline-block mr-2 lg:mr-4 px-4 pt-1 pb-2 text-xs lg:text-sm bg-slate-500 dark:bg-slate-800 text-slate-200 capitalize"
            key={id}
          >
            {category.name}
          </span>
        );
      })}
    </div>
  );
}
