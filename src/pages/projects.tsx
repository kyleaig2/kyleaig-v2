import ProjectEntry, {
  ProjectEntryProps,
} from "@/components/projects/ProjectEntry";
import React from "react";

export default function Projects() {
  const example: ProjectEntryProps = {
    years: [2018, 2021],
    title: "Cordofind",
    link: "https://apple.com/music",
    tags: ["iOS", "Swift", "SwiftUI", "Kotlin", "Java", "React", "Next.js"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  };

  return (
    <section id="projects" className="flex items-center justify-center">
      <div className="w-fit max-w-full flex flex-col gap-20">
        <ProjectEntry {...example} />
        <ProjectEntry {...example} />
        <ProjectEntry {...example} />
      </div>
    </section>
  );
}
