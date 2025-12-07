import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandMedium,
  IconBrandTwitter,
} from "@tabler/icons-react";
import { LinkPreview } from "../ui/link-preview";

export default function Footer() {
  return (
    <div className="py-4 max-w-[350px] sm:max-w-[600px] border-t-2 mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
      <p className="text-sm">
        © {new Date().getFullYear()} Nachatra Sharma • All Rights Reserved
      </p>
      <div className="flex flex-row gap-6">
        <LinkPreview
          text="GitHub Profile"
          url="https://github.com/nachatra-sharma/"
        >
          <IconBrandGithub />
        </LinkPreview>
        <LinkPreview
          text="Linkedin Profile"
          url="https://www.linkedin.com/in/sharma-nachatra/"
        >
          <IconBrandLinkedin />
        </LinkPreview>
        <LinkPreview
          text="Medium Profile"
          url="https://medium.com/@sharmanachatra"
        >
          <IconBrandMedium />
        </LinkPreview>
        <LinkPreview text="Twitter Profile" url="https://x.com/nachatrasharma">
          <IconBrandTwitter />
        </LinkPreview>
        <LinkPreview
          text="Instagram Profile"
          url="https://www.instagram.com/nachatra.sharma/"
        >
          <IconBrandInstagram />
        </LinkPreview>
      </div>
    </div>
  );
}
