export interface IProject {
  id: string;
  years: [number, number] | number | [number, "Current"];
  title: string;
  link?: string;
  description: string;
  tags?: string[];
  image_path?: string;
}

export const projects: IProject[] = [
  {
    id: "prj-cordofind",
    years: 2021,
    title: "Cordofind",
    link: "https://github.com/kyleaig2",
    description:
      "Developed a CLI app for building a local CRM to network with music curators and editors. Outputs to CSV for processing in AirTable.",
    tags: ["Python", "AirTable"],
    image_path: '/assets/terminal.png',
  },
  {
    id: "prj-chess",
    years: 2021,
    title: "Chess",
    link: "https://github.com/kyleaig2/Chess",
    description:
      "A beginner React project taken on to learn the technology and explore Chess move mechanics.",
    tags: ["React"],
    image_path: '/assets/king.png',
  },
  {
    id: "prj-kyleaig",
    years: [2025, "Current"],
    title: "kyleaig",
    link: "https://github.com/kyleaig2/kyleaig-v2",
    description: "The latest iteration of my professional website.",
    tags: ["Next.js", "React", "Tailwind CSS", "Vercel", "Figma"],
    image_path: '/assets/website.jpg',
  },
];
