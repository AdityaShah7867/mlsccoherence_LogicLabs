'use client';
import React, { useEffect, useState } from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import axios from 'axios';

const Page = ({ params }: { videoId: string }) => {
  const [embedUrl, setEmbedUrl] = useState("");
  const [analyzedComments, setAnalyzedComments] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/youtube/analyzeComments/${params.videoId}`);
        if (response.status === 200) {
          setEmbedUrl(`https://www.youtube.com/embed/${params.videoId}?si=mf4_-QqwGOJLWPC0`);
          setAnalyzedComments(response.data.analyzedComments);
        } else {
          console.error('Error fetching video data');
        }
      } catch (error) {
        console.error('Error fetching video data:', error);
      }
    };

    fetchData();
  }, [params.videoId]);

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
      <div>
        <h2>Analyzed Comments:</h2>
        <ul>
          {analyzedComments.map((comment, index) => (
            <li key={index}>
              <p>{comment.comment}</p>
              <p>Sentiment: {comment.sentiment}</p>
            </li>
          ))}
        </ul>
      </div>
    </DefaultLayout>
  );
};

export default Page;
