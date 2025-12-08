"use client";
import { Spotlight } from "@/components/ui/spotlight-new";
import { BlogsCard } from "./BlogsCard";
import { Cover } from "@/components/ui/cover";
import { useMobile } from "@/hooks/useMobile";

export function HeroBlog() {
  const isMobile = useMobile();
  return (
    <div className="w-full rounded-md flex items-center justify-center dark:bg-[#0b0b0c] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight />
      <div className="flex flex-col gap-5 mt-10 md:mt-30">
        <div className="p-4 max-w-7xl  mx-auto relative z-10  w-full pt-10 sm:pt-20 md:pt-0">
          {isMobile ? (
            <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-950 dark:from-neutral-50 dark:to-neutral-400 bg-opacity-50 leading-10 pb-5">
              What I&apos;m Learning Right Now
            </h1>
          ) : (
            <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-950 dark:from-neutral-50 dark:to-neutral-400  bg-opacity-50 leading-20">
              What I&apos;m Learning <br /> <Cover>Right Now</Cover>
            </h1>
          )}
          <p className="mt-0 md:mt-4 font-normal text-base max-w-xl text-center mx-auto">
            A collection of my technical notes, experiments, and lessons learned
            while exploring the world of web development.
          </p>
        </div>
        <BlogsCard />
      </div>
    </div>
  );
}
