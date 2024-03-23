"use client";
import React from "react";

const Search = () => {
  return (
    <div className="w-full max-w-lg ">
      <div className="relative">
        <input
          type="text"
          className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:placeholder-gray-400 focus:ring-blue-500 focus:ring-opacity-50"
          placeholder="Search"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            className="h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 15l4.14 4.14m-9.83-2.17a5.99 5.99 0 1 1 8.48-8.48 5.99 5.99 0 0 1-8.48 8.48z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Search;
