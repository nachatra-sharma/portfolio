import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import Image from "next/image";
import IndiaFlag from "@/public/india.png";

export function CoolCard() {
  return (
    <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
      <EvervaultCard text="hover" />
      <div className="mt-3">
        <Image src={IndiaFlag} width={30} height={30} alt="India Flag" />
        <h2 className="dark:text-white text-black mt-4 text-sm font-semibold tracking-wide">
          Hey there! I&apos;m Nachatra Sharma, a developer based in India.
        </h2>
      </div>
    </div>
  );
}
