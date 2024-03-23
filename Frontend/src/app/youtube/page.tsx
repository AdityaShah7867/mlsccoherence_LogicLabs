"use client";
import React, { useState } from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import ChartOne from "@/components/Charts/ChartOne";

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <DefaultLayout>
      <div>
        <div className="container flex flex-col gap-4 md:flex-row">
          <div className="w-full md:w-1/3">
            <div className="rounded-xl bg-white p-3">
              <h1 className="p-2 font-semibold text-black">Peak Video</h1>
              <div className="mt-2 flex aspect-video w-full  items-center justify-center overflow-hidden rounded-lg">
                <iframe
                  src="https://www.youtube.com/embed/BMTS0F_6VCs?si=bnjb1GruB596tAbV"
                  frameBorder={0}
                  allowFullScreen
                  className="mt-4 h-full w-11/12 rounded-lg"
                />
              </div>
              <h1 className="font-sans ml-4 mt-2 font-semibold text-black">
                Title here
              </h1>
              <p className="ml-4">Created on :</p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
                <div className="m-2 rounded-lg bg-purple-200 p-2 text-xl text-purple-900">
                  1234
                  <br />
                  Total Views
                </div>
                <div className="m-2 rounded-lg bg-sky-100 p-2 text-xl text-sky-900">
                  69
                  <br />
                  Total Videos
                </div>
              </div>
            </div>
          </div>
          <div className="w-full  md:w-2/3">
            <div className="rounded-lg bg-white">
              <h1 className="p-2 text-lg font-bold text-black">
                Statistics of your youtube channel
              </h1>
              <div>
                <p className="p-2">Chart on basis of yt upload videos dates</p>
                <ChartOne />
              </div>
            </div>

            <div className="mt-4 rounded-lg bg-white">
              <div className="flex flex-wrap items-center gap-4 p-2">
                <div>
                  <iframe
                    src="https://www.youtube.com/embed/BMTS0F_6VCs?si=bnjb1GruB596tAbV"
                    frameBorder={0}
                    allowFullScreen
                    className="mt-4 rounded-lg"
                  />
                </div>
                <div className="mt-8">
                  <div>Title</div>
                  <div>
                    Description :
                    <br />
                  </div>
                  <div>Likes:321 &nbsp; &nbsp; Comments:123</div>
                </div>
                <div className="ml-auto">
                  <button
                    onClick={handleButtonClick}
                    className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
                  >
                    Open Modal
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-200 bg-opacity-50">
    <div className="bg-white rounded-lg border border-gray-300 p-8 w-96">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold">Youtube Transcript</h2>
        <button onClick={closeModal} className="text-red-500 hover:text-red-700">
          X
        </button>
      </div>
      <div className="mt-4 aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
        <iframe
          src="https://www.youtube.com/embed/BMTS0F_6VCs?si=bnjb1GruB596tAbV"
          frameBorder={0}
          allowFullScreen
          className="w-full h-full"
        />
      </div>
      <p className="mt-4 text-sm text-gray-600">This is the transcript of the YouTube video.</p>
    </div>
  </div>
)}

    </DefaultLayout>
  );
};

export default Page;
