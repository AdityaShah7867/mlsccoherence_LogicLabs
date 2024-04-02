"use client"
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Image from "next/image";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Link from "next/link";
import React from "react";
import axios from "axios";


const Post = () => {

  const [post,setPost]=React.useState('')
  const [caption,setCaption]=React.useState('')
  const [captionLoading,setCaptionLoading]=React.useState(false)
  const [rewriteCaption,setRewriteCaption]=React.useState(false)
  const [date,setDate]=React.useState('')
  const [time,setTime]=React.useState('')



  

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        'http://localhost:4000/api/post/create',
        {
          postContent: post,
          mediaUrls: ["https://img.ayrshare.com/012/gb.jpg"],
          platforms: ["linkedin"]
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        }
      );

      console.log(response);

      console.log('post', post);

    } catch (error) {
      console.log(error);
    }
  };


  const generateCaption=async()=>{
    setCaptionLoading(true)
    const response=await axios.post('http://localhost:4000/api/generate',{
      prompt:post
    })
    
    console.log(response)

    if(response.status===200){
      setCaptionLoading(false)
      console.log(response.data)
      setPost(response.data.text)
    }
  }


  const enhanceCaption=async()=>{
    setRewriteCaption(true)
    const response=await axios.post('http://localhost:4000/api/rewrite',{
      prompt:post
    })
    
    console.log(response)

    if(response.status===200){
      setRewriteCaption(false)
      console.log(response.data)
      setPost(response.data.text)
    }
  }

  const captionByImage=async()=>{
    const response=await axios.post('http://localhost:4000/api/generateByImage',{
      prompt:post
    })
    
    console.log(response)

    if(response.status===200){
      console.log(response.data)
      setPost(response.data.caption)
    }
  }

  return (
       <DefaultLayout>
      <div className="mx-auto ">
        <Breadcrumb pageName="Profile" />
        <div className="m-2 p-2 text-black font-sans bg-white">
          <div className=" font-sans  p-4">
            <h1 className="font-bold">SEND / SCHEDULE A POST</h1>
            <p>Post on multiple Platforms at once!</p>
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
                    name="post"
                    value={post}
                    onChange={(e) => setPost(e.target.value)}
                    rows={4}
                    className="text-gray-900 bg-gray-50 border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg border p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Write your thoughts here..."
                    defaultValue={""}
                  />
                </div>
                <div className="w-full lg:w-1/3">
                  <div className="extraOutline mx-auto w-full max-w-lg rounded-lg bg-white p-4">
                    <div className="file_upload border-gray-300 relative rounded-lg border-4 border-dotted p-5">
                      <label htmlFor="fileInput">
                        <input
                          // onChange={handleFileChange}
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
              </div>
              <div
                onClick={generateCaption}
                className="buttons flex flex-wrap items-center justify-start gap-6"
              >
                <div className="flex flex-wrap rounded-md bg-black p-2 text-white">
                  <div>{captionLoading ? "Loading..." : "Generate Caption"}</div>
                  <div>
                    
                  </div>
                </div>
                <div
                  onClick={enhanceCaption}
                  className="rounded-md bg-blue-500 p-2 text-white"
                >
                  {rewriteCaption ? "Loading..." : "Enhance Caption"}
                </div>
                <div
                  onClick={captionByImage}
                  className="rounded-md bg-blue-500 p-2 text-white"
                >
                  {rewriteCaption ? "Loading..." : "Generate BY Image"}
                </div>
              </div>
              <br />
              <hr className="mb-4" />
              <div className="text-left">
                <p
                  onClick={handleSubmit}
                  className="text-left border border-black p-2 rounded-lg bg-blue-300"
                >
                  Post on Social Networks
                </p>
              </div>
              <div>
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
