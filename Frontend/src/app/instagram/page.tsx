"use client";
import React, { useEffect, useState } from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Link from "next/link";
import axios from "axios"; // Import Axios

const Page = () => {
  const [userData, setUserData] = useState(null);
  const [userPosts, setUserPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/instagramData/",
        );
        if (response.status === 200) {
          setUserData(response.data.userData);
          setUserPosts(response.data.userPosts);
        } else {
          setError("Failed to fetch user data");
        }
      } catch (error) {
        setError("Error fetching user data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <DefaultLayout>
      <div>
        <div className="container flex flex-col gap-4 md:flex-row">
          <div className="w-full md:w-1/3">
            <div className="rounded-xl bg-white p-3">
              <h1 className="p-2 font-semibold text-black">
                Full Name : {userData?.username}
              </h1>
              <div className="mt-2 flex aspect-video w-full  items-center justify-center overflow-hidden rounded-lg">
                {/* Assuming you want to embed the YouTube channel */}
                <iframe
                  src=""
                  frameBorder={0}
                  allowFullScreen
                  className="mt-4 h-full w-11/12 rounded-lg"
                />
              </div>
              <h1 className="font-sans ml-4 mt-2 font-semibold text-black">
                username
              </h1>
              <p className="ml-4">Created on </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
                <div className="m-2 rounded-lg bg-purple-200 p-2 text-xl text-purple-900">
                  {userData?.edge_followed_by?.count || 0}
                  <br />
                  Total Followers
                </div>
                <div className="m-2 rounded-lg bg-sky-100 p-2 text-xl text-sky-900">
                  {userData?.edge_owner_to_timeline_media?.count || 0}
                  <br />
                  Total Posts
                </div>
              </div>
            </div>
          </div>
          <div className="w-full  md:w-2/3">
            <div className="rounded-lg bg-white">
              <h1 className="p-2 text-lg font-bold text-black">
                Statistics of your Instagram AccountD
              </h1>
              {/* Render other social links here */}
              {/* Example: <a href={userData.social_media_links.twitter}>Twitter</a> */}
              {userPosts?.map((post, index) => (
  <div key={index} className="rounded-lg bg-white p-4 shadow-md">
    <h2 className="text-xl font-semibold">
      Uploaded Time: {post.uploadedTime}
    </h2>
    {post.videoLink.map((video, i) => (
      <div key={i} className="mt-4">
        <iframe
          width="100%"
          height="315"
          src={video}
          title={`Embedded Video ${i}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    ))}
    <p className="mt-2">Like Count: {post.likeCount}</p>
  </div>
))}

            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Page;
