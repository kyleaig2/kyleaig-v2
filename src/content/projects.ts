export interface IProject {
  id: string;
  years: [number, number] | number | [number, "Current"];
  title: string;
  link?: string;
  description: string;
  tags?: string[];
}

export const projects: IProject[] = [
  {
    id: "prj-cordofind",
    years: 2021,
    title: "Cordofind",
    link: "https://github.com/kyleaig2",
    description:
      "Developed a CLI app for building a local CRM to network with music curators and editors. Outputs to CSV for processing in AirTable",
    tags: ["Python", "AirTable"],
  },
  {
    id: "prj-chess",
    years: 2021,
    title: "Chess",
    description:
      "Beginner React project taken on to learn the technology and explore Chess move mechanics.",
    tags: ["React"],
  },
  {
    id: "prj-kyleaig",
    years: [2025, "Current"],
    title: "kyleaig",
    link: "https://github.com/kyleaig2/kyleaigv2",
    description: "V1 of my professional website.",
    tags: ["Next.js", "React", "TailwindCSS", "Vercel", "Figma"],
  },
];
