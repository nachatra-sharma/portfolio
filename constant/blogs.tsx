import WhyImportReact from "@/public/blogs/react.webp";
import UnderTheHood from "@/public/blogs/under.webp";
import SystemDesign from "@/public/blogs/system-design.webp";
import GitGithub from "@/public/blogs/git.webp";
import {
  IconBrandGit,
  IconBrandReact,
  IconSettingsCode,
} from "@tabler/icons-react";
import Image, { StaticImageData } from "next/image";

const ImageContainer = ({
  src,
  alt,
}: {
  src: StaticImageData;
  alt: string;
}) => (
  <Image
    src={src}
    alt={alt}
    loading="eager"
    className="w-full h-full min-h-24 rounded-xl object-cover"
  />
);

export const blogs = [
  {
    title: "Why Do We Need to Import React?",
    description:
      "If you've had the same confusion, you're not alone. Let's break it down in a simple, practical way.",
    header: (
      <ImageContainer
        src={WhyImportReact}
        alt="Why Do We Need to Import React?"
      />
    ),
    icon: <IconBrandReact className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Why React Needs Immutable State 👀",
    description:
      "I also wonder why we need to create a new array or object when updating a state variable.",
    header: (
      <ImageContainer
        src={UnderTheHood}
        alt="Why React Needs Immutable State"
      />
    ),
    icon: <IconBrandReact className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Beginners Guide for Git & GitHub",
    description:
      "When I was an intern, I used to spend a lot of time figuring things out.",
    header: (
      <ImageContainer src={GitGithub} alt="Beginners Guide for Git & GitHub" />
    ),
    icon: <IconBrandGit className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "What is Latency and Throughput?",
    description:
      "I was learning system design recently, and I came across two catchy terms latency and throughput.",
    header: (
      <ImageContainer
        src={SystemDesign}
        alt="What is Latency and Throughput?"
      />
    ),
    icon: <IconSettingsCode className="h-4 w-4 text-neutral-500" />,
  },
];
