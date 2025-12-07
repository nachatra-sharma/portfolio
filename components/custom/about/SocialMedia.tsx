import {
  IconBrandGithub,
  IconBrandGmail,
  IconBrandLinkedin,
  IconBrandMedium,
} from "@tabler/icons-react";
import SocialMediaBadge from "./SocialMediaBadge";
import { LinkPreview } from "@/components/ui/link-preview";

export default function SocialMedia() {
  return (
    <div className="flex flex-row gap-2">
      <LinkPreview url="https://github.com/nachatra-sharma/">
        <SocialMediaBadge text="GitHub" IconBrand={IconBrandGithub} />
      </LinkPreview>
      <LinkPreview url="https://www.linkedin.com/in/sharma-nachatra/">
        <SocialMediaBadge text="Linkedin" IconBrand={IconBrandLinkedin} />
      </LinkPreview>
      <LinkPreview url="https://medium.com/@sharmanachatra">
        <SocialMediaBadge text="Medium" IconBrand={IconBrandMedium} />
      </LinkPreview>
    </div>
  );
}
