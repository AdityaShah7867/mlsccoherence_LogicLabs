"use client";
import React from "react";

const RoomCard = () => {
  return (
    <div className="block rounded-lg shadow-xl border bg-white w-80">
          <div
            className="relative overflow-hidden bg-cover bg-no-repeat"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <img
              className="rounded-lg  sm:m-h-64 md:h-64 w-full"
              src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-51701996/original/ac2eabbe-da86-4646-a7d7-f6fe48c083b8.jpeg?im_w=720"
              
            />
            <a href="#!">
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
            </a>
          </div>
          <div className="p-2">
            <div className="flex justify-between">
              <h5 className="mb-2 text-sm font-bold leading-tight text-neutral-800 dark:text-neutral-50">
                Room Name
              </h5>
              <h5 className="mb-2 text-sm font-bold leading-tight text-neutral-800 dark:text-neutral-50 flex">
                50% <span className="ml-1 text-green-500">Complete</span>
              </h5>
            </div>
            <p className="mb-1 text-sm text-neutral-600 dark:text-neutral-200">
              Added X weeks ago
            </p>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Date Range - Owner
            </p>
            <h5 className="mb-2 text-sm font-bold leading-tight text-neutral-800 dark:text-neutral-50">
              BUDGET - $1000
            </h5>
          </div>
          <hr/>
          
        </div>
  );
};

export default RoomCard;
