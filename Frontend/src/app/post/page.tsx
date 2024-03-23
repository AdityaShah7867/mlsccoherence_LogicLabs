import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Image from "next/image";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Next.js PostForm ",
  description: "This is Post form",
};

const Post = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto ">
        <Breadcrumb pageName="Profile" />

        <div className="m-2 p-2 text-black font-sans bg-white">
          <div className=" font-sans  p-4">
            <h1 className="font-bold">SEND / SCHEDULE A POST</h1>
            <p>Post on multiple Platforms at once!</p>
            {/* <hr className="mt-4" /> */}
            <div>
              <div className="flex flex-wrap items-center justify-center">
                <div className="mb-4 w-full lg:mb-0 lg:w-2/3">
                  <label
                    htmlFor="message"
                    className="text-gray-700 mb-2 mt-4 block text-sm font-medium dark:text-white"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="text-gray-900 bg-gray-50 border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg border p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Write your thoughts here..."
                    defaultValue={""}
                  />
                </div>
                <div className="w-full lg:w-1/3">
                  {/* fadsda */}
                  <div className="extraOutline mx-auto w-full max-w-lg rounded-lg bg-white p-4">
                    <div className="file_upload border-gray-300 relative rounded-lg border-4 border-dotted p-5">
                      <svg
                        className="mx-auto mb-4 w-24 text-indigo-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                      <div className="input_field mx-auto flex flex-col text-center">
                        <label htmlFor="fileInput">
                          <input
                            id="fileInput"
                            className="absolute inset-0 block w-full cursor-pointer text-sm opacity-0"
                            type="file"
                            multiple
                          />
                          <div className="text border-gray-300 cursor-pointer rounded border bg-indigo-600 p-1 px-3 font-semibold text-white hover:bg-indigo-500">
                            Select
                          </div>
                        </label>
                        <div className="title mt-2 uppercase text-indigo-500">
                          or drop files here
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* sdada */}
                </div>
              </div>
              <div className="buttonss flex flex-wrap items-center justify-start gap-6">
                <div className="flex flex-wrap rounded-md bg-black p-2 text-white">
                  <div>Generate Caption</div>
                  <div>
                    <Image
                      src="/ai.png"
                      width={40}
                      height={40}
                      alt="Picture of the author"
                    />
                  </div>
                </div>

                <div className="rounded-md bg-blue-500 p-2 text-white">
                  Enhance Caption
                </div>
              </div>
              <br />
              <hr className="mb-4" />
              <div className="text-left">
                <p className="text-left">Post on Social Networks</p>
              </div>
              <div>
                {/* edsfdfsfs */}

                <div className="mt-4 flex flex-wrap items-center justify-start gap-8"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Post;
