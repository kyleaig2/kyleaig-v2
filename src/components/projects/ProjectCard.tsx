import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import { Inter } from "next/font/google";
import Link from "next/link";
import React from "react";
import CardTag from "../CardTag";
import { IProject } from "@/content/projects";

export type ProjectCardProps = IProject & { focused: boolean };

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
});

function ProjectCard({
  id,
  title,
  years,
  link,
  description,
  tags,
  focused = false,
}: ProjectCardProps) {

  return (
    <div
      id={id}
      className={`${inter.className} ${
        focused ? "dark:bg-zinc-900/80 bg-zinc-200/70 opacity-100" : "opacity-50"
      } hover:bg-zinc-200/70 dark:hover:bg-zinc-900/80 bg-zinc-200/30 dark:bg-zinc-900/30 hover:shadow-lg transition-all duration-500 max-w-2xl relative flex flex-col text-sm`}
    >
      {/* Header*/}
      <div className="flex justify-between text-zinc-600 dark:text-zinc-200 px-7 pt-5 items-start">
        <div className="flex flex-col">
          <span className="font-bold">{title}</span>
          <span className="text-zinc-700 dark:text-zinc-300">
            {Array.isArray(years) ? `${years[0]} - ${years[1]}` : `${years}`}
          </span>
        </div>
        <div className="flex gap-2 items-center">
          {/* <span className="font-semibold">{employer}</span> */}
          {link && (
            <Link href={link} aria-label={title} target="_blank">
              <ArrowTopRightOnSquareIcon className="size-4 dark:text-indigo-300" />
            </Link>
          )}
        </div>
      </div>
      {/* Body */}
      <div className="flex px-7 py-5 gap-4">
        <div className="w-20 h-20 bg-slate-500 dark:bg-indigo-400/50" />
        <div className="flex-1 dark:text-zinc-300">{description}</div>
      </div>
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

export default ProjectCard;
