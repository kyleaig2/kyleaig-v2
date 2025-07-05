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

  const tl_point_classes = "after:absolute shadow-lg after:w-4 after:h-4 after:bg-zinc-800 after:-left-11.5 after:rotate-45"
  return (
    <div className={`${inter.className} max-w-2xl relative flex flex-col text-sm ${tl_point_classes}`}>
      {/* Header*/}
      <div className="flex justify-between bg-zinc-800 text-slate-50 px-8 pt-8 pb-5 items-start">
        <div className="flex flex-col">
          <span className="font-bold">{title}</span>
          <span className="text-zinc-400">
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
      <div className="p-8 bg-zinc-200">{description}</div>
      {/* Footer */}
      {tags && (<div className="px-8 pb-8 bg-zinc-200">
        <div className="flex gap-2 flex-wrap">
          {tags.map(
            (tag) => (
              <span key={tag} className="bg-zinc-800 font-bold text-slate-50 px-2 py-1">
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
