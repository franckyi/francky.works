import parse from "html-react-parser";
import { Work } from "@/types/Work";
import Thumbnail from "./Thumbnail";
import WorkLinks from "./WorkLinks";
import WorkCategories from "./WorkCategories";
import WorkTags from "./WorkTags";
import { Suspense } from "react";

const workItemClasses =
  "my-12 lg:my-24 lg:flex lg:items-center gap-8 lg:gap-16 rounded-sm saturate-100";

type WorkItemProps = { work: Work };

export default function WorkItem({ work }: WorkItemProps) {
  return (
    <article className={workItemClasses}>
      <Thumbnail
        href={work._links["wp:featuredmedia"][0].href}
        alt={work.title.rendered}
      />

      <div className="lg:w-2/4">
        {work.meta.subtitle && (
          <h3 className="mb-2 text-2xl lg:text-2xl dark:text-slate-200 font-semibold font-secondary">
            <span className="text-emerald-500 dark:text-emerald-400">
              {parse(work.title.rendered)}
            </span>{" "}
            — {work.meta.subtitle}
          </h3>
        )}

        {work.meta.industry && (
          <span className="text-sm text-slate-500 uppercase">
            {work.meta.industry}
          </span>
        )}

        {work.content.rendered && (
          <div className="mt-4 mb-4 text-justify dark:text-slate-300">
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
