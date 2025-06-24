import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import { Inter } from "next/font/google";
import Link from "next/link";
import React from "react";

export interface TimelineEntryProps {
  years: [number, number];
  title: string;
  employer: string;
  employer_site?: string;
  description: string;
  location?: string;
  tags?: string[];
}

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
})

function TimelineEntry({
  title,
  years,
  employer,
  employer_site,
  description,
  tags
}: TimelineEntryProps) {

  const tl_point_classes = "after:absolute after:w-4 after:h-4 after:bg-zinc-800 after:-left-11.5 after:rotate-45";
  const more = "last:before:absolute last:before:w-4 last:before:h-4 last:before:bg-zinc-800 last:before:-left-11.5 last:before:top-full last:before:rotate-45 last:before-top-5";

  return (
    <div className={`${inter.className} hover:bg-zinc-200/50 hover:shadow-lg transition-all max-w-2xl relative flex flex-col text-sm ${tl_point_classes} ${more}`}>
      {/* Header*/}
      <div className="flex justify-between text-zinc-600 px-7 pt-5 items-start">
        <div className="flex flex-col">
          <span className="font-bold">{title}</span>
          <span className="text-zinc-700">
            {years[0]} - {years[1]}
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <span className="font-semibold">{employer}</span>
          {employer_site && (
            <Link href={employer_site} target="_blank">
              <ArrowTopRightOnSquareIcon className="size-4" />
            </Link>
          )}
        </div>
      </div>
      {/* Body */}
      <div className="px-7 py-5">{description}</div>
      {/* Footer */}
      {tags && (<div className="px-7 pt-5 pb-5">
        <div className="flex gap-2">
          {tags.map(
            (tag) => (
              <span key={tag} className="text-xs bg-zinc-300/50 font-bold text-zinc-500 px-3 py-1 rounded-full">
                {tag}
              </span>
            )
          )}
        </div>
      </div>)}
    </div>
  );
}

export default TimelineEntry;
