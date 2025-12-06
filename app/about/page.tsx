import AboutComponent from "@/components/custom/about/AboutComponent";
import { NavbarComponent } from "@/components/custom/Navbar";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";

export default function About() {
  return (
    <div className="relative flex w-full flex-col items-start justify-start overflow-hidden">
      <NavbarComponent />
      <BackgroundRippleEffect />
      <div className="mt-40 w-full">
        <AboutComponent />
      </div>
    </div>
  );
}
