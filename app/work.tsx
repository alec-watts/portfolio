import { StaticImageData } from "next/image";
import UM from "@/public/education/UM.png";
import HW from "@/public/education/HW.png";
import MLIcon from "@/public/memorylabs/icon.png";
import SVIcon from "@/public/stablevideo/icon.png";
import SV1 from "@/public/stablevideo/1.png";
import SV2 from "@/public/stablevideo/2.png";
import SV3 from "@/public/stablevideo/3.png";
import EDIcon from "@/public/electricdevtools/icon.png";
import FFmpeg from "@/public/electricdevtools/ffmpeg.png";
import Zipper from "@/public/electricdevtools/zipper.png";
import NPM from "@/public/electricdevtools/npm.png";
import CHIcon from "@/public/chatalyst/icon.png";
import CH1 from "@/public/chatalyst/1.png";
import WBIcon from "@/public/wattsinthebox/icon.png";
import { InstagramEmbed } from 'react-social-media-embed';
import FlorenceIcon from "@/public/florence/icon.png"
import Florence0 from "@/public/florence/0.jpeg"
import Florence3 from "@/public/florence/3.jpeg"
import Florence4 from "@/public/florence/4.jpeg"
import Florence5 from "@/public/florence/5.jpeg"
import Florence6 from "@/public/florence/6.jpeg"
import Florence7 from "@/public/florence/7.jpeg"
import Florence8 from "@/public/florence/8.jpeg"
import Florence9 from "@/public/florence/9.jpeg"

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
  customElement?: React.ReactNode;
  link?: string;
  technologies: string[];
  bulletPoints: string[];
}

export const work: Work[] = [
  {
    title: "Memory Labs",
    position: "Founder",
    icon: MLIcon,
    media: ['/memorylabs/add-client.mp4', '/memorylabs/upload.mp4', '/memorylabs/review.mp4', '/memorylabs/client-send.mp4', '/memorylabs/apple-wide.mp4', '/memorylabs/google-wide.mp4'],
    link: "https://memorylabs.app",
    technologies: ["Next.js", "Postgres + Prisma", "FFmpeg", "Docker", "AWS", "Clerk Auth", "Stripe", "Tailwind + Shadcn"],
    bulletPoints: [
      "B2B SaaS platform to streamline workflows for home photo and video digitization businesses.",
      "Engineered a media processing pipeline to automate labor-intensive tasks of extracting scenes; adding date / location metadata; and cropping / rotating / deduplicating photos.",
      "Served stream-optimized video (HLS) & downsized image copies over CloudFront, enabling business owners to edit GBs content on the web.",
      "Implemented Google Drive, Google Photos, Dropbox, and Apple Photos integrations for seamless file uploads and downloads.",
      "Utilized this software to digitize tens of thousands of photos and hundreds of videos for B2C operation, driving sales and providing real-world feedback to refine the software. ",
    ],
  },
  {
    title: "Stable Video",
    position: "SWE, GrabLabs",
    icon: SVIcon,
    media: [SV1, SV2, SV3],
    link: "https://www.stablevideo.com/",
    technologies: ["Next.js", "Postgres + Prisma", "Firebase Auth", "S3 + CloudFront", "Stripe", "Tailwind",],
    bulletPoints: [
      "Collaborated to build stablevideo.com, a consumer application giving users access to StabilityAI's video generation model, gaining foundational webdev experience"
    ],
  },
  {
    title: "Electric Dev Tools",
    position: "Creator",
    icon: EDIcon,
    media: ['https://www.youtube.com/embed/TN5xaWhzXvs?si=o9Va7yrEe9v8Ws-v', Zipper, FFmpeg, NPM],
    link: "https://electricdevtools.com",
    technologies: ["Next.js", "Postgres + Prisma", "Docker", "AWS", "GCP", "FFmpeg", "Clerk Auth", "NPM", "Stripe", "Tailwind + Shadcn"],
    bulletPoints: [
      "Perform FFmpeg operations on files in your S3 bucket with a simple API",
      "Generate a .zip download link so your users can download multiple files at once. No need to create, store, or manage .zip files.",
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
      "Spearheaded early AI adoption at GrabLabs by building a no-code tool  empowering non-technical team members to fine tune LLMs on Twitch stream content",  "Collaborated with senior developers to commercialize the tool as Chatalyst, a Twitch streamer extension", "Chatalyst uses a fine-tuned LLM to analyze streamer transcriptions and chat activity, delivering real-time content suggestions designed to boost viewer engagement and subscription growth",
    ],
  },
  {
    title: "Watts In The Box",
    position: "Project",
    icon: WBIcon,
    media: [],
    customElement: <InstagramEmbed url="https://www.instagram.com/watts.in.the.box/" width='100%' />,
    link: "https://www.instagram.com/watts.in.the.box/",
    technologies: ["ESP32", "RaspberryPi", "Micropython", "3D Printing", "Soldering"],
    bulletPoints: [
      'Interactive light fixture that responds to sound, motion, and touch',
      'Built with ESP32 microcontroller, light strip, microphone, accelerometer, & motion detector',
      'Remote control using Apple Shortcuts over Local Network',
      'Constructed with 3D printed pieces & off the shelf materials',
      'Inspired by James Turrell\'s artwork',
    ],
  },
  {
    title: "Photography in Florence",
    position: "Semester Abroad",
    icon: FlorenceIcon,
    media: [Florence3, Florence6, Florence7, Florence4, Florence8, Florence9, Florence5, Florence0],
    technologies: ["Photography", "Camouflage"],
    bulletPoints: [
      'Captured photos of nature, architecture, and events while living abroad in Florence, Italy',
    ],
  },
];