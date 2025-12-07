export default function LanguageBadge({ text }: { text: string }) {
  return (
    <div className="px-5 py-1 text-white border border-[#ffffff1a] rounded-full flex flex-row gap-3 items-center hover:bg-[#95959526] transition text-xs select-none cursor-pointer font-semibold tracking-wide">
      {text}
    </div>
  );
}
