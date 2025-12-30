import TailwindCSS from "@/public/skills/tailwind.svg";
import NextJS from "@/public/skills/nextjs.svg";
import NextJSLight from "@/public/skills/nextjs-light.svg";
import Github from "@/public/skills/github.svg";
import GithubLight from "@/public/skills/github-light.svg";
import Bash from "@/public/skills/bash.svg";
import BashLight from "@/public/skills/bash-light.svg";
import Figma from "@/public/skills/figma.svg";
import Linux from "@/public/skills/linux.svg";
import NodeJS from "@/public/skills/nodejs.svg";
import ReactQuery from "@/public/skills/query.svg";
import React from "@/public/skills/react.svg";
import TypeScript from "@/public/skills/typescript.svg";
import Vite from "@/public/skills/vite.svg";
import Webpack from "@/public/skills/webpack.svg";
import Zod from "@/public/skills/zod.svg";
import CSS from "@/public/skills/css.svg";
import Eslint from "@/public/skills/eslint.svg";
import Git from "@/public/skills/git.svg";
import HTML from "@/public/skills/html.svg";
import JavaScript from "@/public/skills/javascript.svg";
import MongoDB from "@/public/skills/mongodb.svg";
import Express from "@/public/skills/express.svg";
import ExpressDark from "@/public/skills/express-dark.svg";
import Mongoose from "@/public/skills/mongoose.svg";

export const frontendSkills = [
  { id: 1, image: HTML, alt: "HTML", text: "HTML", imageLight: HTML },
  { id: 2, image: CSS, alt: "CSS", text: "CSS", imageLight: CSS },
  {
    id: 3,
    image: JavaScript,
    alt: "JavaScript",
    text: "JavaScript",
    imageLight: JavaScript,
  },
  {
    id: 4,
    image: TypeScript,
    alt: "TypeScript",
    text: "TypeScript",
    imageLight: TypeScript,
  },
  { id: 5, image: React, alt: "React", text: "React", imageLight: React },
  {
    id: 6,
    image: NextJS,
    alt: "Next.js",
    text: "Next.js",
    imageLight: NextJSLight,
  },
  {
    id: 8,
    image: TailwindCSS,
    alt: "Tailwind CSS",
    text: "Tailwind CSS",
    imageLight: TailwindCSS,
  },
  {
    id: 9,
    image: ReactQuery,
    alt: "React Query",
    text: "React Query",
    imageLight: ReactQuery,
  },
  { id: 10, image: Vite, alt: "Vite", text: "Vite", imageLight: Vite },
  {
    id: 11,
    image: Webpack,
    alt: "Webpack",
    text: "Webpack",
    imageLight: Webpack,
  },
];

export const backendSkills = [
  { id: 12, image: NodeJS, alt: "Node.js", text: "Node.js", darkImage: NodeJS },
  {
    id: 13,
    image: MongoDB,
    alt: "MongoDB",
    text: "MongoDB",
    darkImage: MongoDB,
  },
  { id: 14, image: Zod, alt: "Zod", text: "Zod", darkImage: Zod },
  {
    id: 21,
    image: Express,
    alt: "ExpressJS",
    text: "ExpressJS",
    darkImage: ExpressDark,
  },
  {
    id: 22,
    image: Mongoose,
    alt: "Mongoose",
    text: "Mongoose",
    darkImage: Mongoose,
  },
];

export const toolsSkills = [
  { id: 15, image: Git, alt: "Git", text: "Git", imageLight: Git },
  {
    id: 16,
    image: Github,
    alt: "GitHub",
    text: "GitHub",
    imageLight: GithubLight,
  },
  { id: 17, image: Bash, alt: "Bash", text: "Bash", imageLight: BashLight },
  { id: 18, image: Linux, alt: "Linux", text: "Linux", imageLight: Linux },
  { id: 19, image: Eslint, alt: "ESLint", text: "ESLint", imageLight: Eslint },
];

export const designSkills = [
  { id: 20, image: Figma, alt: "Figma", text: "Figma" },
];
