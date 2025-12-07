import AboutComponent from "@/components/custom/about/AboutComponent";
import { NavbarComponent } from "@/components/custom/Navbar";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";

export default function About() {
  return (
    <div className="relative flex w-full flex-col items-start justify-start overflow-hidden">
      <NavbarComponent />
      <div className="mt-30 max-w-[600px] mx-auto">
        <AboutComponent />
      </div>
    </div>
  );
}
