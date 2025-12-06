import { NavbarComponent } from "@/components/custom/Navbar";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";

export default function Blogs() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-start justify-start overflow-hidden">
      <NavbarComponent />
      <BackgroundRippleEffect />
      <div className="mt-60 w-full"></div>
    </div>
  );
}
