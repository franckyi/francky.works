import parse from "html-react-parser";
import { Work } from "@/types/Work";
import Thumbnail from "./Thumbnail";
import WorkLinks from "./WorkLinks";
import WorkCategories from "./WorkCategories";
import WorkTags from "./WorkTags";

const workItemClasses =
  "my-12 lg:flex lg:items-center gap-8 lg:gap-16 rounded-sm";

type WorkItemProps = { work: Work; view: string };

export default function WorkItem({ work, view }: WorkItemProps) {
  return (
    <article
      className={`${workItemClasses} ${
        view === "grid" ? "lg:w-[360px] lg:my-4" : "lg:my-24"
      }`}
    >
      <Thumbnail
        href={work._links["wp:featuredmedia"][0].href}
        alt={work.title.rendered}
        view={view}
      />

      <div
        className={` ${
          view === "grid" ? "hidden lg:absolute lg:bg-dark/95" : "lg:w-2/4"
        }`}
      >
        {work.meta.subtitle && (
          <h3 className="mb-2 text-2xl lg:text-2xl dark:text-light font-semibold font-secondary">
            <span className="text-primary">{parse(work.title.rendered)}</span> —{" "}
            {work.meta.subtitle}
          </h3>
        )}

        {work.meta.industry && (
          <span className="text-sm text-gray uppercase">
            {work.meta.industry}
          </span>
        )}

        {work.content.rendered && (
          <div className="my-4 text-justify dark:text-lightGray">
            {parse(work.content.rendered)}
          </div>
        )}

        {work.categories.length > 0 && (
          <WorkCategories categories={work.categories} />
        )}

        {work.tags.length > 0 && <WorkTags tags={work.tags} />}

        <WorkLinks meta={work.meta} />
      </div>
    </article>
  );
}
