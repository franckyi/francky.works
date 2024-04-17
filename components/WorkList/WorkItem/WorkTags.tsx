import getTag from "@/lib/getTag";

export default function WorkCategories({ tags }: { tags: number[] }) {
  return (
    <div className="my-4 lg:flex flex-wrap lg:items-center">
      <h4 className="lg:inline lg:mr-4 font-semibold dark:text-emerald-400 text-xs lg:text-base">
        Technologies
      </h4>
      {tags.map(async (id) => {
        const tag = await getTag(id);
        return (
          <span
            key={id}
            className="my-1 inline-block mr-2 lg:mr-4 px-4 pt-1 pb-2 text-xs lg:text-sm capitalize bg-slate-500 dark:bg-slate-800 text-slate-200"
          >
            {tag.name}
          </span>
        );
      })}
    </div>
  );
}
