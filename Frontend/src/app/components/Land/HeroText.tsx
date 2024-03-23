"use client";
import { TypewriterEffectSmooth } from "../acce/ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Unlock ",
    },
    {
      text: "Social ",
    },
    {
      text: "Insight ",
    },
    {
      text: "with ",
    },
    {
      text: "InsightfulSocial.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col  bg-white items-center h-[15rem]  ">
      <br />
      <br />
      <br />
      <br />
      <br />
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
      Elevate Your Social Insight.
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-blue-500 border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
        <button className="w-40 h-10 rounded-xl bg-green-500 text-white border border-black  text-sm">
          Signup
        </button>
      </div>
    </div>
  );
}
