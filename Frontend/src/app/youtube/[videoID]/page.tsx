// pages/youtube/[videoId].tsx
"use client"
import { useRouter } from 'next/router';
import React from 'react';

const VideoPage: React.FC = () => {
    const router = useRouter();
    const { videoId } = router.query;
  return (
    <div>
      <h1>This is the Video Page</h1>
    </div>
  );
};


export default VideoPage;
