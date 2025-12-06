import {
  IconBrandGithub,
  IconBrandGmail,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import SocialMediaBadge from "./SocialMediaBadge";

export default function SocialMedia() {
  return (
    <div className="flex flex-row gap-2">
      <SocialMediaBadge text="GitHub" IconBrand={IconBrandGithub} />
      <SocialMediaBadge text="Linkedin" IconBrand={IconBrandLinkedin} />
      <SocialMediaBadge text="Gmail" IconBrand={IconBrandGmail} />
    </div>
  );
}
