"use client";
import { useEffect, useState } from "react";
import { Menu, MenuItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import { Blocks, BookImage, BookMarked, CircleUser, House } from "lucide-react";
import { ModeToggle } from "./ThemeToggle";
import Link from "next/link";

export function NavbarComponent() {
  const [top, setTop] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      setTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={`w-full ${top ? "" : "h-16 fixed z-999 backdrop-blur-lg"}`}>
      <Navbar className="top-0 my-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"} className={`flex flex-row gap-2 items-center`}>
          <House className="w-4 h-4" />
          <MenuItem
            setActive={setActive}
            active={active}
            item={"Home"}
          ></MenuItem>
        </Link>
        <Link href={"/about"} className={`flex flex-row gap-2 items-center`}>
          <CircleUser className="w-4 h-4" />
          <MenuItem
            setActive={setActive}
            active={active}
            item={"About"}
          ></MenuItem>
        </Link>
        <Link href={"/work"} className={`flex flex-row gap-2 items-center`}>
          <Blocks className="w-4 h-4" />
          <MenuItem
            setActive={setActive}
            active={active}
            item={"Work"}
          ></MenuItem>
        </Link>
        <Link href={"/blogs"} className={`flex flex-row gap-2 items-center`}>
          <BookMarked className="w-4 h-4" />
          <MenuItem
            setActive={setActive}
            active={active}
            item={"Blogs"}
          ></MenuItem>
        </Link>
        <Link href={"/gallery"} className={`flex flex-row gap-2 items-center`}>
          <BookImage className="w-4 h-4" />
          <MenuItem
            setActive={setActive}
            active={active}
            item={"Gallery"}
          ></MenuItem>
        </Link>
        <ModeToggle />
      </Menu>
    </div>
  );
}
