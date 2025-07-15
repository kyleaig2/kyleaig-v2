import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/content/projects";
import useHashNavigation from "@/hooks/useHashScroll";
import { sendProjectClick } from "@/utils/analytics";
import React from "react";

export default function Projects() {
  const activeHash = useHashNavigation();

  const handleLinkClick = (project: string) => {
    sendProjectClick(project);
  }

  return (
    <section id="projects" className="flex items-center justify-center py-10">
      <div className="w-fit max-w-full flex flex-col gap-12">
        {projects.map((p) => (
          <ProjectCard
            focused={activeHash === "projects"}
            handleLinkClick={handleLinkClick}
            key={p.id}
            {...p}
          />
        ))}
      </div>
    </section>
  );
}
