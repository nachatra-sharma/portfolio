import { Earth } from "lucide-react";
import Image from "next/image";
import User from "@/public/profile.jpeg";
import LanguageBadge from "./LanguageBadge";

export default function UserInfo() {
  return (
    <div className="fixed top-40 left-60 flex flex-col gap-5 items-center">
      <Image
        src={User}
        width={200}
        height={200}
        alt="User Image"
        className="rounded-full"
      />
      <div className="flex flex-row gap-2 items-center">
        <Earth className="w-4 h-4" />
        <p className="text-xs font-semibold tracking-wide">Aisa/India</p>
      </div>
      <div className="flex flex-row gap-2">
        <LanguageBadge text="English" />
        <LanguageBadge text="Hindi" />
      </div>
    </div>
  );
}
