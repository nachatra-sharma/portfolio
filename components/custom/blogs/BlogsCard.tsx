import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { blogs } from "@/constant/blogs";

export function BlogsCard() {
  return (
    <BentoGrid className="max-w-[350px] sm:max-w-[600px] md:max-w-5xl mb-10 mx-auto">
      {blogs.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
