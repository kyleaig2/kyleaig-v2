import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import { Inter } from "next/font/google";
import Link from "next/link";
import React from "react";

export interface ProjectEntryProps {
  years: [number, number];
  title: string;
  link?: string;
  description: string;
  tags?: string[];
}

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
})

function ProjectEntry({
  title,
  years,
  link,
  description,
  tags
}: ProjectEntryProps) {

  return (
    <div className={`${inter.className} hover:bg-zinc-200/70 bg-zinc-200/30 hover:shadow-lg transition-all max-w-2xl relative flex flex-col text-sm`}>
      {/* Header*/}
      <div className="flex justify-between text-zinc-600 px-7 pt-5 items-start">
        <div className="flex flex-col">
          <span className="font-bold">{title}</span>
          <span className="text-zinc-700">
            {years[0]} - {years[1]}
          </span>
        </div>
        <div className="flex gap-2 items-center">
          {/* <span className="font-semibold">{employer}</span> */}
          {link && (
            <Link href={link} aria-label={title} target="_blank">
              <ArrowTopRightOnSquareIcon className="size-4" />
            </Link>
          )}
        </div>
      </div>
      {/* Body */}
      <div className="flex px-7 py-5 gap-4">
        <div className="w-20 h-20 bg-slate-500" />
        <div className="flex-1">{description}</div></div>
      {/* Footer */}
      {tags && (<div className="px-7 pt-5 pb-5">
        <div className="flex gap-2 flex-wrap">
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

export default ProjectEntry;
