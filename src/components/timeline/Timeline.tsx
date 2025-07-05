import React from "react";
import TimelineEntry, { TimelineEntryProps } from "./TimelineEntrySimple";

function Timeline() {
  const example: TimelineEntryProps = {
    years: [2018, 2021],
    title: "Software Engineer",
    employer: "Apple Music",
    employer_site: "https://apple.com/music",
    tags: ["iOS", "Swift", "SwiftUI", "Kotlin", "Java", "React", "Next.js"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  };

  return (
    <div className="relative after:-ml-10 my-10 after:w-1 after:bg-zinc-800 after:absolute after:top-0 after:bottom-0 after:opacity-50 flex flex-col gap-20">
      <TimelineEntry {...example}></TimelineEntry>
      <TimelineEntry {...example}></TimelineEntry>
      <TimelineEntry {...example}></TimelineEntry>
      <TimelineEntry {...example}></TimelineEntry>
    </div>
  );
}

export default Timeline;
