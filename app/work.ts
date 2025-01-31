import { StaticImageData } from "next/image";
import UM from "@/public/education/UM.png";
import HW from "@/public/education/HW.png";
import MLIcon from "@/public/memorylabs/icon.png";
// import ML1 from "@/public/memorylabs/1.png";
import SVIcon from "@/public/stablevideo/icon.png";
import SV1 from "@/public/stablevideo/1.png";
import EDIcon from "@/public/electricdevtools/icon.png";
import ED1 from "@/public/electricdevtools/1.png";
import CHIcon from "@/public/chatalyst/icon.png";
import CH1 from "@/public/chatalyst/1.png";
import WBIcon from "@/public/wattsinthebox/icon.png";
import WB1 from "@/public/wattsinthebox/1.png";

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


interface Work {
  title: string;
  position: string;
  icon: StaticImageData;
  media: (StaticImageData | string)[];
  link: string;
  technologies: string[];
  bulletPoints: string[];
}

export const work: Work[] = [
  {
    title: "Memory Labs",
    position: "Founder",
    icon: MLIcon,
    media: ['/memorylabs/1.mp4'], // ML1
    link: "https://memorylabs.app",
    technologies: ["Next.js", "Postgres + Prisma", "FFmpeg", "Docker", "AWS", "Clerk Auth", "Stripe", "Tailwind + Shadcn"],
    bulletPoints: [
      "Built an AI SaaS platform that automates workflows for home photo and video digitization businesses, featuring a custom Dockerized Lambda processing pipeline that performs scene detection, autocropping, autorotation, deduplication, transcription, and datetime/location metadata inference on scanned photos & videos.",
      "Generated profit digitizing tens of thousands of photos and hundreds of videos for B2C operation. Conducted dozens of B2B sales calls and attended industry conferences to guide software development roadmap.",
      "Engineered a responsive web dashboard, leveraging the Next.js cache and CloudFront signed cookies to deliver downsized image and HLS video copies, enabling business owners to quickly view and manage gigabytes of uploaded content.",
      "Integrated Google Drive, Google Photos, Dropbox, and Apple Photos for seamless file uploads and downloads.",
    ],
  },
  {
    title: "Stable Video",
    position: "SWE, GrabLabs",
    icon: SVIcon,
    media: [SV1],
    link: "https://www.stablevideo.com/",
    technologies: ["Next.js", "Postgres + Prisma", "Tailwind", "S3 + CloudFront", "Stripe"],
    bulletPoints: [
      "Alongside a team built a consumer application for StabilityAI’s video generation model, using Next.js, Prisma Postgres, S3 and Cloudfront, where users can generate videos from text & photo, view history, & vote on results."
    ],
  },
  {
    title: "Electric Dev Tools",
    position: "Creator",
    icon: EDIcon,
    media: [ED1],
    link: "https://electricdevtools.com",
    technologies: ["Next.js", "Postgres + Prisma", "FFmpeg", "Docker", "AWS", "GCP", "Clerk Auth", "NPM", "Stripe", "Tailwind + Shadcn"],
    bulletPoints: [
      "Built fully managed and serverless S3 FFmpeg API, using Next.js, Prisma, Lambda, Docker, Clerk Auth & Stripe, providing developers with turn-key FFmpeg functionality, async/sync invocation, webhooks, logging, and a status dashboard without the need to deploy lower level infrastructure.",
      "Developed an instant, dynamic zip download solution using Google Cloudrun that constructs and streams zip files directly to the client based on a set of predefined target files specified by the application. This eliminates the need to create, store and manage zip files.",
    ],
  },
  {
    title: "Chatalyst - Twitch Extension",
    position: "SWE, GrabLabs",
    icon: CHIcon,
    media: [CH1],
    link: "https://portal.grablabs.com/chatalyst/join/",
    technologies: ["React.js", "Express.js", "GraphQL", "Firestore"],
    bulletPoints: [
      "Spearheaded early AI adoption at GrabLabs by building a no-code tool that empowered non-technical team members to fine tune LLMs on Twitch stream content. Collaborated with senior developers to commercialize the tool as Chatalyst, a Twitch streamer extension. Chatalyst uses a fine-tuned LLM to analyze streamer transcriptions and chat activity, delivering real-time content suggestions designed to boost viewer engagement and subscription growth.",
    ],
  },
  {
    title: "Watts In The Box",
    position: "Project",
    icon: WBIcon,
    media: [WB1],
    link: "https://www.instagram.com/watts.in.the.box/",
    technologies: ["ESP32", "RaspberryPi", "Micropython", "3D Printing", "Soldering"],
    bulletPoints: [
      "Inspired by James Turrell's artwork, I created an interactive IoT light fixture that dynamically responds to sound, motion, and touch using a microcontroller, light strip, microphone, accelerometer, and motion detector. Tested various materials and designs to create a light box that effectively diffused light while maintaining simplicity and ease of assembly. Implemented simplistic remote control functionality with Apple Shortcuts. Consistently shared progress on Instagram and competed in the BuildSpace accelerator program to showcase and refine the work."
    ],
  },
];