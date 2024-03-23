'use client';
import React from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

const Page = ({ params }: { videoId: string }) => {
  const embedUrl = `https://www.youtube.com/embed/${params.videoId}?si=mf4_-QqwGOJLWPC0`;

  return (
    <DefaultLayout>
      <div>
        <iframe
          width="560"
          height="315"
          src={embedUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </DefaultLayout>
  );
};

export default Page;
