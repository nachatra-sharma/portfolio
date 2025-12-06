import { Icon, IconProps } from "@tabler/icons-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export default function SocialMediaBadge({
  IconBrand,
  text,
}: {
  IconBrand: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
  text: string;
}) {
  return (
    <div className="px-3 py-1 text-white border border-[#ffffff1a] rounded-full flex flex-row gap-3 items-center hover:bg-[#95959526] transition text-xs select-none cursor-pointer font-semibold tracking-wide">
      <IconBrand width={20} height={20} />
      {text}
    </div>
  );
}
