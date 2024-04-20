import TagLabel from "./TagLabel";

const heading = "Technologies";

export default function WorkCategories({ tags }: { tags: number[] }) {
  return (
    <div className="my-4 lg:flex flex-wrap lg:items-center">
      <h4 className="lg:inline lg:mr-4 font-semibold text-xs lg:text-base">
        {heading}
      </h4>
      {tags.map((id: number) => {
        return <TagLabel key={id} tagId={id} />;
      })}
    </div>
  );
}
