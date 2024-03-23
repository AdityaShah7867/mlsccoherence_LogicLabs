import React from "react";

function Schedule() {
  return (
    <div className="flex gap-3 mt-4   ">
      <div className="text-gray-700 relative mt-6 flex w-96 flex-col rounded-xl bg-white bg-clip-border shadow-md">
        <div className="bg-blue-gray-500 shadow-blue-gray-500/40 relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-clip-border text-white shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="card-image"
          />
        </div>
        <div className="p-6">
          <h5 className="font-sans text-blue-gray-900 mb-2 block text-xl font-semibold leading-snug tracking-normal antialiased">
            Social app name
          </h5>
          <p className="font-sans block text-base font-light leading-relaxed text-inherit antialiased">
            Description
          </p>
        </div>
        <div className="flex">
          <div className="p-6 pt-0">
            <button
              className="font-sans bg-gray-900 shadow-gray-900/10 hover:shadow-gray-900/20 select-none rounded-lg px-6 py-3 text-center align-middle text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              style={{ color: "black" }}
            >
              Read More
            </button>
          </div>
          <div className="p-6 pt-0 flex">
            <button
              className="flex gap-3 font-sans bg-gray-900 shadow-gray-900/10 hover:shadow-gray-900/20 select-none rounded-lg px-6 py-3 text-center align-middle text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              style={{ color: "black" }}
            >
              <img
                width={23}
                height={23}
                src="https://img.icons8.com/ios-filled/50/000000/love-circled.png"
                alt="love-circled"
                className=""
              /><p className="mt-1">likes</p>
            </button>
          </div>
        </div>
      </div>
      <div className="text-gray-700 relative mt-6 flex w-96 flex-col rounded-xl bg-white bg-clip-border shadow-md">
        <div className="bg-blue-gray-500 shadow-blue-gray-500/40 relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-clip-border text-white shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="card-image"
          />
        </div>
        <div className="p-6">
          <h5 className="font-sans text-blue-gray-900 mb-2 block text-xl font-semibold leading-snug tracking-normal antialiased">
            Social app name
          </h5>
          <p className="font-sans block text-base font-light leading-relaxed text-inherit antialiased">
            Description
          </p>
        </div>
        <div className="flex">
          <div className="p-6 pt-0">
            <button
              className="font-sans bg-gray-900 shadow-gray-900/10 hover:shadow-gray-900/20 select-none rounded-lg px-6 py-3 text-center align-middle text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              style={{ color: "black" }}
            >
              Read More
            </button>
          </div>
          <div className="p-6 pt-0 flex">
            <button
              className="flex gap-3 font-sans bg-gray-900 shadow-gray-900/10 hover:shadow-gray-900/20 select-none rounded-lg px-6 py-3 text-center align-middle text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              style={{ color: "black" }}
            >
              <img
                width={23}
                height={23}
                src="https://img.icons8.com/ios-filled/50/000000/love-circled.png"
                alt="love-circled"
                className=""
              /><p className="mt-1">likes</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
