import parse from "html-react-parser";
import { Work } from "@/types/Work";
import Image from "next/image";
import React, { Suspense } from "react";
import getMedia from "@/lib/getMedia";
import getTag from "@/lib/getTag";
import getCategory from "@/lib/getCategory";

const workItemClasses =
  "my-12 lg:my-24 lg:flex lg:items-center gap-8 lg:gap-16 rounded-sm saturate-100";

const buttonStyle =
  "py-2 px-4 mr-4 border-2 border-b-8 border-slate-500 dark:border-slate-600 hover:border-slate-900 dark:hover:border-emerald-400 dark:text-slate-200 font-bold hover:rotate-6";

type ThumbnailProps = { href: string; alt: string };

async function Thumbnail({ href, alt }: ThumbnailProps) {
  const thumbnail = await getMedia(href);
  return (
    <Image
      src={thumbnail.media_details.sizes.medium_large.source_url}
      alt={alt}
      className="my-8 rounded-md lg:rounded-2xl shadow-xl shadow-slate-400 dark:shadow-slate-950"
      width={645}
      height={365}
      draggable="false"
    />
  );
}

type WorkItemProps = { work: Work };

export default function WorkItem({ work }: WorkItemProps) {
  return (
    <article className={workItemClasses}>
      <Suspense>
        <Thumbnail
          href={work._links["wp:featuredmedia"][0].href}
          alt={work.title.rendered}
        />
      </Suspense>
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
          <div className="my-4 lg:flex lg:items-center flex-wrap">
            <h4 className="lg:inline lg:mr-4 font-semibold dark:text-emerald-400 text-xs lg:text-base">
              My role
            </h4>
            <Suspense>
              {work.categories.map(async (id) => {
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
            </Suspense>
          </div>
        )}

        {work.tags.length > 0 && (
          <div className="my-4 lg:flex flex-wrap lg:items-center">
            <h4 className="lg:inline lg:mr-4 font-semibold dark:text-emerald-400 text-xs lg:text-base">
              Technologies
            </h4>
            <Suspense>
              {work.tags.map(async (id) => {
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
            </Suspense>
          </div>
        )}

        <div className="my-6 whitespace-nowrap lg:whitespace-normal text-xs lg:text-base">
          {work.meta.live && (
            <a
              href={work.meta.live}
              className={buttonStyle}
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Live
            </a>
          )}

          {work.meta.code && (
            <a
              href={work.meta.code}
              className={buttonStyle}
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Code {"<>"}
            </a>
          )}

          {work.meta.design && (
            <a
              href={work.meta.design}
              className={buttonStyle}
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Design
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
