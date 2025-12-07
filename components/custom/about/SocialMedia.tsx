import {
  IconBrandGithub,
  IconBrandGmail,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import SocialMediaBadge from "./SocialMediaBadge";
import { LinkPreview } from "@/components/ui/link-preview";

export default function SocialMedia() {
  return (
    <div className="flex flex-row gap-2">
      <LinkPreview url="https://github.com/nachatra-sharma/">
        <SocialMediaBadge text="GitHub" IconBrand={IconBrandGithub} />
      </LinkPreview>
      <SocialMediaBadge text="Linkedin" IconBrand={IconBrandLinkedin} />
      <SocialMediaBadge text="Gmail" IconBrand={IconBrandGmail} />
    </div>
  );
}
