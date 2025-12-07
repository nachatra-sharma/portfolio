"use client";
import SocialMedia from "./SocialMedia";
import Experience from "./Experience";
import Image from "next/image";
import { CometCard } from "@/components/ui/comet-card";
import {
  backendSkills,
  designSkills,
  frontendSkills,
  toolsSkills,
} from "@/constant/skills";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import User from "@/public/profile.jpeg";
export default function AboutComponent() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  const isDark =
    theme === "dark" || (theme === "system" && systemTheme === "dark");

  return (
    <div className="relative z-10 flex flex-row justify-center gap-10">
      <div className="flex flex-col gap-5">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col gap-5">
            <h1 className="text-5xl font-extrabold tracking-wide">
              Nachatra Sharma
            </h1>
            <h2 className="text-3xl tracking-wide font-bold">
              Full Stack Developer
            </h2>
            <SocialMedia />
          </div>
          <Image
            src={User}
            alt="User Profile"
            width={150}
            height={150}
            className="rounded-full"
          />
        </div>
        <p className="leading-8 tracking-wide">
          I started my journey in 2023, and today I&apos;m growing as a
          full-stack developer who loves crafting websites that speak true
          engineering. What excites me the most is building apps, solving logic
          problems, creating clean UI and learning new technologies.
        </p>
        <p className="leading-8 tracking-wide">
          My strengths include JavaScript, TypeScript, modern JavaScript
          frameworks such as Next.js, React.js and React Native, along with a
          mindset focused on learning, experimentation, and improvement.
        </p>
        <p className="leading-8 tracking-wide">
          I&apos;m currently working at PRNK Info Tech. Beyond tech, I enjoy
          travelling, playing football & chess, which helps me stay creative and
          balanced. Looking forward to meeting people who share similar
          interests, opportunities, and ideas.
        </p>
        <hr />
        {/* Experience */}
        <h2 className="text-3xl tracking-wide font-bold">Work Experience</h2>
        <Experience />
        <hr />
        {/* Technical Skills */}
        <div className="mb-10">
          <h2 className="text-3xl tracking-wide font-bold mb-10">
            Frontend Skills
          </h2>
          <div className="grid grid-cols-5 gap-x-5 gap-y-5">
            {frontendSkills.map((skill) => (
              <CometCard key={skill.id}>
                <Image
                  src={isDark ? skill.image : skill.imageLight}
                  alt={skill.alt}
                  width={70}
                  height={70}
                  className="mx-auto"
                />
                <h3 className="text-xs font-extrabold tracking-wide pt-3 text-center">
                  {skill.text}
                </h3>
              </CometCard>
            ))}
          </div>
        </div>
        <hr />
        <div className="mb-10">
          <h2 className="text-3xl tracking-wide font-bold mb-10">
            Backend Skills
          </h2>
          <div className="grid grid-cols-5 gap-x-5 gap-y-5">
            {backendSkills.map((skill) => (
              <CometCard key={skill.id}>
                <Image
                  src={isDark ? skill.darkImage : skill.image}
                  alt={skill.alt}
                  width={70}
                  height={70}
                  className="mx-auto"
                />
                <h3 className="text-xs font-extrabold tracking-wide pt-3 text-center">
                  {skill.text}
                </h3>
              </CometCard>
            ))}
          </div>
        </div>
        <hr />
        <div className="mb-10">
          <h2 className="text-3xl tracking-wide font-bold mb-10">
            Tools Skills
          </h2>
          <div className="grid grid-cols-5 gap-x-5 gap-y-5">
            {toolsSkills.map((skill) => (
              <CometCard key={skill.id}>
                <Image
                  src={isDark ? skill.image : skill.imageLight}
                  alt={skill.alt}
                  width={70}
                  height={70}
                  className="mx-auto"
                />
                <h3 className="text-xs font-extrabold tracking-wide pt-3 text-center">
                  {skill.text}
                </h3>
              </CometCard>
            ))}
          </div>
        </div>
        <hr />
        <div className="mb-10">
          <h2 className="text-3xl tracking-wide font-bold mb-10">
            Design Skills
          </h2>
          <div className="grid grid-cols-5 gap-x-5 gap-y-5">
            {designSkills.map((skill) => (
              <CometCard key={skill.id}>
                <Image
                  src={skill.image}
                  alt={skill.alt}
                  width={70}
                  height={70}
                  className="mx-auto"
                />
                <h3 className="text-xs font-extrabold tracking-wide pt-3 text-center">
                  {skill.text}
                </h3>
              </CometCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
