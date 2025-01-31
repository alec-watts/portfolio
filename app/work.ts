
interface Work {
  title: string;
  position: string;
  subtitle: string;
  description: string;
  image: string;
  link?: string;
  technologies: string[];
}

export const work: Work[] = [
  {
    title: "Memory Labs",
    position: "Founder",
    subtitle: "Workflow automation for home photo & video digitization",
    description: "Work 1",
    image: "Work 1",
    link: "Work 1",
    technologies: ["Next.js", "PostgreSQL", "Prisma", "FFmpeg", "Docker", "AWS: CDK, S3, CloudFront, Lambda, ECR, ECS", "Clerk Auth", "Github Actions", "Stripe", "Tailwind + Shadcn"],
  },
  {
    title: "Stable Video",
    position: "SWE @ GrabLabs",
    subtitle: "Workflow automation for home photo & video digitization",
    description: "Work 1",
    image: "Work 1",
    link: "Work 1",
    technologies: ["Next.js", "PostgreSQL", "Prisma", "Tailwind", "S3 + CloudFront", "Stripe"],
  },
  {
    title: "Chatalyst - Twitch Extension",
    position: "SWE @ GrabLabs",
    subtitle: "Workflow automation for home photo & video digitization",
    description: "Work 1",
    image: "Work 1",
    link: "Work 1",
    technologies: ["React", "Express"]
  },
  {
    title: "Watts In The Box",
    position: "Side Project",
    subtitle: "Workflow automation for home photo & video digitization",
    description: "Work 1",
    image: "Work 1",
    link: "Work 1",
    technologies: ["Next.js", "PostgreSQL", "Prisma", "FFmpeg", "Docker", "AWS", "Clerk Auth", "Stripe", "Tailwind + Shadcn"],
  },
];