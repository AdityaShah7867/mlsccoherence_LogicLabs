"use client";
import React from "react";
import { PinContainer } from "../acce/ui/3d-pin";

export function AnimatedPinDemo() {
  return (
    <div className="h-[23rem] flex items-center justify-center ">
      <PinContainer
        title="Home Owner Name"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Project Name
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Budget : rs 30000
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" >
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyGfUQtwF55t1YmZ2y21FcujfiLmeElMh9qOUsZSnTBg&s" alt="" />
        </div>
        </div>
      </PinContainer>
    </div>
  );
}
