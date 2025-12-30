import { HeroBlog } from "@/components/custom/blogs/HeroBlog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | Nachatra Sharma",
};

export default function Blogs() {
  return <HeroBlog />;
}
