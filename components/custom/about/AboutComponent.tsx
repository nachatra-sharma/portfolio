import UserInfo from "./UserInfo";
import SocialMedia from "./SocialMedia";
import Experience from "./Experience";

export default function AboutComponent() {
  return (
    <div className="relative z-10 flex flex-row justify-center gap-10">
      <div className="w-1/4"></div>
      <UserInfo />
      <div className="flex flex-col gap-5 w-1/2">
        <h1 className="text-5xl font-extrabold tracking-wide">
          Nachatra Sharma
        </h1>
        <h2 className="text-3xl tracking-wide font-bold text-[#ccd6f6]">
          Full Stack Developer
        </h2>
        <SocialMedia />
        <p className="leading-8 tracking-wide text-[#8892b0]">
          Selene is a Jakarta-based design engineer with a passion for
          transforming complex challenges into simple, elegant design solutions.
          Her work spans digital interfaces, interactive experiences, and the
          convergence of design and technology.
        </p>
        {/* Experience */}
        <h2 className="text-3xl tracking-wide font-bold text-[#ccd6f6]">
          Work Experience
        </h2>
        <Experience />
        {/* Technical Skills */}
        <div className="mb-10">
          <h2 className="text-3xl tracking-wide font-bold text-[#ccd6f6] mb-10">
            Technical Skills
          </h2>
          <div className="flex justify-between flex-wrap"></div>
        </div>
      </div>
    </div>
  );
}
