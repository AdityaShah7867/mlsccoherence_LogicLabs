import ECommerce from "@/components/Dashboard/SocialDash";
import { Metadata } from "next";
import {HeroScrollDemo } from "@/components/Land/Land";
import { TypewriterEffectSmoothDemo } from '@/components/Typewriter/TypeWriter';
import Navbar from "@/components/Navbar/Navbar";

export const metadata: Metadata = {
  title:
    "Social Media Dashboard ",
  description: "This is Social media Dashboard",
};

export default function Home() {
  return (
    <div className="bg-[#577089]">
      <Navbar/>
      <TypewriterEffectSmoothDemo/>
      <div className="-mt-52">
      <HeroScrollDemo />
      </div>
   
    </div>
  );
}
