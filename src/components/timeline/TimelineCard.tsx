import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import { Inter } from "next/font/google";
import Link from "next/link";
import React from "react";
import CardTag from "../CardTag";
import useHashNavigation from "@/hooks/useHashScroll";

export interface ITimelineEntry {
  id: string,
  years: [number, number] | number;
  title: string;
  employer: string;
  employer_site?: string;
  description: string;
  location?: string;
  tags?: string[];
}

export type TimelineCardProps = ITimelineEntry & {
  focused: boolean;
};

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
})

function TimelineCard({
  id,
  title,
  years,
  employer,
  employer_site,
  description,
  tags,
  focused = false,
}: TimelineCardProps) {

  const activeHash = useHashNavigation();

  const tl_point_classes = `${focused ? "after:shadow-sm after:bg-zinc-800 dark:first:after:bg-zinc-200" : "after:bg-zinc-400 dark:after:bg-zinc-600" } ${activeHash === 'work' ? "first:after:bg-zinc-800 dark:first:after:bg-zinc-200" : "" } after:transition-all after:duration-300 after:absolute after:w-4 after:h-4 dark:after:bg-zinc-300 after:-left-11.5 after:rotate-45 after:z-2`;
  const more = `${focused ? "last:before:shadow-sm" : "" } ${focused || activeHash === 'work' ? "last:before:bg-zinc-800 dark:last:before:bg-zinc-300" : "last:before:bg-zinc-400 dark:last:before:bg-zinc-600"} last:before:absolute before:transition-all before:duration-300 last:before:w-4 last:before:h-4 last:before:-left-11.5 last:before:top-full last:before:rotate-45 last:before-top-5`;


  const yearInfo = Array.isArray(years) ? `${years[0]} - ${years[1]}` : years;

  return (
    <div
      id={id}
      className={`${inter.className} ${
        focused ? "shadow-lg dark:bg-zinc-900/80 bg-zinc-200/70" : ""
      } hover:bg-zinc-200/70 dark:hover:bg-zinc-900/80 bg-zinc-200/30 dark:bg-zinc-900/30 hover:shadow-lg transition-all duration-300 max-w-2xl relative flex flex-col text-sm ${tl_point_classes} ${more}`}
    >
      {/* Header*/}
      <div className="flex justify-between text-zinc-600 dark:text-zinc-200 px-7 pt-5 items-start">
        <div className="flex flex-col">
          <span className="font-bold">{title}</span>
          <span className="text-zinc-700 dark:text-zinc-300">{yearInfo}</span>
        </div>
        {employer_site ? (
          <Link
            href={employer_site}
            aria-label={employer}
            target="_blank"
            className="flex gap-2 items-center"
          >
            <span className="font-bold">{employer}</span>
            <ArrowTopRightOnSquareIcon className="size-4 dark:text-indigo-300" />
          </Link>
        ) : (
          <span className="font-bold">{employer}</span>
        )}
      </div>
      {/* Body */}
      <div className="px-7 py-5 dark:text-zinc-300">{description}</div>
      {/* Footer */}
      {tags && (
        <div className="px-7 pt-5 pb-5">
          <div className="flex gap-2 flex-wrap">
            {tags.map((tag) => (
              <CardTag key={`${title}-${tag}`} tag={tag} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default TimelineCard;
