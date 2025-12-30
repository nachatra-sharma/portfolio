import AboutComponent from "@/components/custom/about/AboutComponent";
import { NavbarComponent } from "@/components/custom/Navbar";

export default function Home() {
  return (
    <div className="relative flex w-full flex-col items-start justify-start overflow-hidden">
      <NavbarComponent />
      <div className="mt-20 sm:mt-30 max-w-[330px] sm:max-w-[600px] mx-auto">
        <AboutComponent />
      </div>
    </div>
  );
}
