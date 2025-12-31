import { Button } from "@/components/ui/moving-border";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Nachatra Sharma",
};

export default function Contact() {
  return (
    <div className="flex items-center h-[85vh] sm:h-[90vh] w-[90%] mx-auto sm:w-screen justify-center">
      <div className="flex flex-col max-w-xl text-center gap-4">
        <h2 className="text-4xl md:text-6xl">Get In Touch</h2>
        <p className="text-sm md:text-base leading-7 md:leading-8">
          Although I&apos;m currently looking for any new opportunities, my
          inbox is always open. Whether you have a question or just want to say
          hi, I&apos;ll try my best to get back to you!
        </p>
        <a
          href="mailto:sharmanachatra@gmail.com"
          aria-label="Send email to Nachatra Sharma"
        >
          <Button
            borderRadius="1.2rem"
            className="bg-white dark:bg-[#0b0b0c] text-black dark:text-white border-neutral-200 dark:border-slate-800 cursor-pointer"
          >
            Contact Now
          </Button>
        </a>
      </div>
    </div>
  );
}
