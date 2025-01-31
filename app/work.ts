
interface Work {
  title: string;
  position: string;
  image: string;
  link: string;
  technologies: string[];
}

export const work: Work[] = [
  {
    title: "Memory Labs",
    position: "Founder",
    image: "/memorylabs/1.png",
    link: "https://memorylabs.app",
    technologies: ["Next.js", "PostgreSQL", "Prisma", "FFmpeg", "Docker", "AWS", "Clerk Auth", "GHA", "Stripe", "Tailwind + Shadcn"],
  },
  {
    title: "Stable Video",
    position: "SWE @ GrabLabs",
    image: "/stablevideo/1.png",
    link: "https://www.stablevideo.com/",
    technologies: ["Next.js", "PostgreSQL", "Prisma", "Tailwind", "S3 + CloudFront", "Stripe"],
  },
  {
    title: "Electric Dev Tools",
    position: "Creator",
    image: "/electricdevtools/1.png",
    link: "https://electricdevtools.com",
    technologies: ["Next.js", "PostgreSQL", "Prisma", "FFmpeg", "Docker", "AWS", "GCP", "Clerk Auth", "Stripe", "Tailwind + Shadcn"],
  },
  {
    title: "Chatalyst - Twitch Extension",
    position: "SWE @ GrabLabs",
    image: "/chatalyst/1.png",
    link: "https://portal.grablabs.com/chatalyst/join/",
    technologies: ["React.js", "Express.js", "GraphQL", "Firestore"]
  },
  {
    title: "Watts In The Box",
    position: "For Fun",
    image: "/wattsinthebox/1.png",
    link: "https://www.instagram.com/watts.in.the.box/",
    technologies: ["ESP32", "RaspberryPi", "Micropython", "3D Printing", "Soldering"],
  },
];