"use client";
import { useEffect, useState } from "react";
import { Menu, MenuItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import { Blocks, BookImage, BookMarked, CircleUser } from "lucide-react";
import { ModeToggle } from "./ThemeToggle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export function NavbarComponent() {
  const [top, setTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => setTop(window.scrollY === 0);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`w-full ${top ? "" : "h-16 fixed z-20 backdrop-blur-lg"}`}>
      <Navbar className="top-0 my-2 shadow-2xl" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const currentRoute = usePathname();

  const menuItems = [
    { href: "/", label: "Me", icon: CircleUser },
    { href: "/work", label: "Work", icon: Blocks },
    { href: "/blogs", label: "Blogs", icon: BookMarked },
    { href: "/gallery", label: "Gallery", icon: BookImage },
  ];

  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-[300px] sm:max-w-[500px] mx-auto z-50",
        className
      )}
    >
      <Menu setActive={setActive}>
        {menuItems.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className="relative px-2 py-1 rounded-md mr-0"
          >
            {currentRoute === href && (
              <motion.div
                layoutId="activeRoute"
                className="absolute inset-0 bg-[#2d313a] dark:bg-[#0b0b0c] rounded-md"
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            )}

            <div
              className={`${
                currentRoute === href && "text-[#e5e5e4]"
              } flex flex-row sm:gap-2 max-w-[340px] items-center px-2 py-1 relative z-10`}
            >
              <Icon className="w-4 h-4" />
              <MenuItem setActive={setActive} active={active} item={label} />
            </div>
          </Link>
        ))}

        <ModeToggle />
      </Menu>
    </div>
  );
}
