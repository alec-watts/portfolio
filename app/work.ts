import { StaticImageData } from "next/image";
import UM from "@/public/UM.png";
import HW from "@/public/HW.png";
import ML1 from "@/public/memorylabs/1.png";
import SV1 from "@/public/stablevideo/1.png";
import ED1 from "@/public/electricdevtools/1.png";
import CH1 from "@/public/chatalyst/1.png";
import WB1 from "@/public/wattsinthebox/1.png";

interface Work {
  title: string;
  position: string;
  images: StaticImageData[];
  link: string;
  technologies: string[];
}

export const work: Work[] = [
  {
    title: "Memory Labs",
    position: "Founder",
    images: [ML1],
    link: "https://memorylabs.app",
    technologies: ["Next.js", "PostgreSQL", "Prisma", "FFmpeg", "Docker", "AWS", "Clerk Auth", "GHA", "Stripe", "Tailwind + Shadcn"],
  },
  {
    title: "Stable Video",
    position: "SWE @ GrabLabs",
    images: [SV1],
    link: "https://www.stablevideo.com/",
    technologies: ["Next.js", "PostgreSQL", "Prisma", "Tailwind", "S3 + CloudFront", "Stripe"],
  },
  {
    title: "Electric Dev Tools",
    position: "Creator",
    images: [ED1],
    link: "https://electricdevtools.com",
    technologies: ["Next.js", "PostgreSQL", "Prisma", "FFmpeg", "Docker", "AWS", "GCP", "Clerk Auth", "Stripe", "Tailwind + Shadcn"],
  },
  {
    title: "Chatalyst - Twitch Extension",
    position: "SWE @ GrabLabs",
    images: [CH1],
    link: "https://portal.grablabs.com/chatalyst/join/",
    technologies: ["React.js", "Express.js", "GraphQL", "Firestore"]
  },
  {
    title: "Watts In The Box",
    position: "For Fun",
    images: [WB1],
    link: "https://www.instagram.com/watts.in.the.box/",
    technologies: ["ESP32", "RaspberryPi", "Micropython", "3D Printing", "Soldering"],
  },
];

interface Education {
  school: string;
  degree: string;
  image: StaticImageData;
  coursework?: string;
}

export const education: Education[] = [
  {
    school: "University of Michigan, Ann Arbor",
    degree: "B.S. Computer Science",
    image: UM,
    coursework: "Data Structures & Algorithms, Operating Systems, Web Systems, Intr. Computer Security, Foundations of CS Theory, Intr. Artificial Intelligence, Conversational AI, Intr. Computer Organization",
  },
  {
    school: "Harvard-Westlake",
    degree: "High School Diploma",
    image: HW,
  },
];
