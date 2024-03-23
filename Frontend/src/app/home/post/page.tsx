import React from "react";
import Checkbox from "../../components/Toggle/Checkbox";
import Image from "next/image";

const page = () => {
  return (
    <div className="text-black m-2 p-2">
      <div className=" p-4 font-sans border-2">
        <h1 className="font-bold">SEND / SCHEDULE A POST</h1>
        <p>Post on multiple Platforms at once!</p>
        <hr className="mt-4" />
        <div>
          <div className="flex flex-wrap justify-center items-center">
            <div className="w-full lg:w-2/3 mb-4 lg:mb-0">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-700 mt-4 dark:text-white"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows={4}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your thoughts here..."
                defaultValue={""}
              />
            </div>

            <div className="w-full lg:w-1/3 ">
              {/* fadsda */}
              <div className="extraOutline p-4 bg-white w-max bg-whtie m-auto rounded-lg">
                <div
                  className="file_upload p-5 relative border-4 border-dotted border-gray-300 rounded-lg"
                  style={{ width: 450 }}
                >
                  <svg
                    className="text-indigo-500 w-24 mx-auto mb-4"
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
                  <div className="input_field flex flex-col w-max mx-auto text-center">
                    <label>
                      <input
                        className="text-sm cursor-pointer w-36 hidden"
                        type="file"
                        multiple
                      />
                      <div className="text bg-indigo-600 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-indigo-500">
                        Select
                      </div>
                    </label>
                    <div className="title text-indigo-500 uppercase">
                      or drop files here
                    </div>
                  </div>
                </div>
              </div>
              {/* sdada */}
            </div>
          </div>
          <div className="buttonss flex flex-wrap justify-start items-center gap-6">
            <div className="bg-black text-white rounded-md p-2 flex flex-wrap">
                <div>
                Generate Caption
                </div>
                <div>
                <Image
                src="/ai.png"
                width={40}
                height={40}
                alt="Picture of the author"
              />
                </div>
              
             
            </div>

            

            <div className="bg-blue-500 text-white rounded-md p-2">
              Enhance Caption
            </div>
          </div>
          <br/>
          <hr className="mb-4"/>
          <div className="text-left">
            <p className="text-left">Post on Social Networks</p>
          </div>
          <div>
            {/* edsfdfsfs */}

            <div className="flex flex-wrap justify-start items-center mt-4 gap-8">
              <Checkbox />
              <Checkbox />
              <Checkbox />
              <Checkbox />
              <Checkbox />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
