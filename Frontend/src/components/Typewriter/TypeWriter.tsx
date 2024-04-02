"use client";
import Link from "next/link.js";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect.tsx";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Unlock",
    },
    {
      text: "Social",
    },
    {
      text: "Insight",
    },
    {
      text: "with",
    },
    {
      text: "Our Platform.",
      className: "text-white dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-white text-xs sm:text-base  ">
        The road to Advance Analytics starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <Link href="/dashboard">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
        </Link>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button>
      </div>
    </div>
  );
}
