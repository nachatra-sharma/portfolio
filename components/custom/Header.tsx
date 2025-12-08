import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";

export function Header() {
  return (
    <>
      <BackgroundRippleEffect />
      <div className="mt-60 w-full">
        <h2 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-neutral-800 md:text-4xl lg:text-7xl dark:text-neutral-100">
          Building bridges between design and code
        </h2>
        <p className="relative z-10 mx-auto mt-4 max-w-xl text-center text-neutral-800 dark:text-neutral-500">
          I&apos;m Nachatra Sharma, a design engineer at PRNK Info Tech, where I
          craft intuitive user experiences. After hours, I build my own
          projects.
        </p>
      </div>
    </>
  );
}
