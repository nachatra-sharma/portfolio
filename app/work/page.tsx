import { FocusCards } from "@/components/ui/focus-cards";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work | Nachatra Sharma",
};

export default function Work() {
  const cards = [
    {
      title: "Atwatch Mobile App",
      src: "/work/atwatch_mobile.png",
      link: "https://play.google.com/store/apps/details?id=com.prnkinfotech.atwatch",
    },
    {
      title: "Atwatch Admin",
      src: "/work/atwatch_admin.png",
      link: "https://atwatch.in/",
    },
    {
      title: "iWonder",
      src: "/work/iwonder.png",
      link: "https://iwonder.com/",
    },
    {
      title: "HelloCalc",
      src: "/work/hellocalc.png",
      link: "https://opensupportsuite.com/home",
    },
  ];

  return <FocusCards cards={cards} />;
}
