'use client'
import React from "react";
import Toggle from "./Toggle";

const Checkbox = () => {
  return (
    <div className="flex flex-wrap justify-start items-center gap-2">
        <div>
            Instagram
        </div>
        <div>
            <Toggle/>
        </div>
    </div>
  );
};

export default Checkbox;
