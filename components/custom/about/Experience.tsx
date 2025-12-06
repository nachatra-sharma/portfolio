import { ExperienceArray } from "@/constant/experience";

export default function Experience() {
  return (
    <>
      {ExperienceArray.map((experience, index) => {
        return (
          <div className="flex flex-col gap-7" key={index}>
            <div className="flex flex-row justify-between items-end">
              <h3 className="text-[#64ffda] font-semibold tracking-wide text-lg">
                {experience.company}
              </h3>
              <div className="flex flex-col items-end">
                <span className="text-[#64ffda] italic text-sm">
                  {experience.type}
                </span>
                <span className="text-[#64ffda] italic text-sm">
                  {experience.date}
                </span>
              </div>
            </div>
            <ul className="flex flex-col gap-3 list-disc pl-7 text-[#8892b0] leading-7 text-base">
              {experience.list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </>
  );
}
