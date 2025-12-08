import { HeroBlog } from "@/components/custom/blogs/HeroBlog";
import { NavbarComponent } from "@/components/custom/Navbar";

export default function Blogs() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-start justify-start overflow-hidden">
      <NavbarComponent />
      <HeroBlog />
    </div>
  );
}
