
interface Work {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link?: string;
  technologies: string[];
}

export const work: Work[] = [
  {
    id: "1",
    title: "Memory Labs",
    subtitle: "Workflow automation for home photo & video digitization",
    description: "Work 1",
    image: "Work 1",
    link: "Work 1",
    technologies: ["Next.js", "Tailwind", "React", "TypeScript"],
  },
];