"use client";
import { useState } from "react";
import { Menu, MenuItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import { Blocks, BookImage, BookMarked, CircleUser, House } from "lucide-react";
import { ModeToggle } from "./ThemeToggle";

export function NavbarComponent() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2 my-2" />
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
        <div className={`flex flex-row gap-2 items-center`}>
          <House className="w-4 h-4" />
          <MenuItem
            setActive={setActive}
            active={active}
            item={"Home"}
          ></MenuItem>
        </div>
        <div className={`flex flex-row gap-2 items-center`}>
          <CircleUser className="w-4 h-4" />
          <MenuItem
            setActive={setActive}
            active={active}
            item={"About"}
          ></MenuItem>
        </div>
        <div className={`flex flex-row gap-2 items-center`}>
          <Blocks className="w-4 h-4" />
          <MenuItem
            setActive={setActive}
            active={active}
            item={"Work"}
          ></MenuItem>
        </div>
        <div className={`flex flex-row gap-2 items-center`}>
          <BookMarked className="w-4 h-4" />
          <MenuItem
            setActive={setActive}
            active={active}
            item={"Blogs"}
          ></MenuItem>
        </div>
        <div className={`flex flex-row gap-2 items-center`}>
          <BookImage className="w-4 h-4" />
          <MenuItem
            setActive={setActive}
            active={active}
            item={"Gallery"}
          ></MenuItem>
        </div>
        <ModeToggle />
      </Menu>
    </div>
  );
}
