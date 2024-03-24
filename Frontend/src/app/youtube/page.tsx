"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import ChartOne from "@/components/Charts/ChartOne";
import data from '../jsoncrack.json'
import VideoViewsChart from "@/components/Charts/ChartOne";
import ChartThree from "@/components/Charts/ChartThree";
import axios from "axios";
import PieChart from "@/components/Charts/PieChart";

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [currentVideoId, setCurrentVideoId] = useState<string | null>(null);

  const handleButtonClick = async (videoId: string) => {
    setCurrentVideoId(videoId); // Set the current video ID when the button is clicked
    setIsModalOpen(true);
    try {
      const response = await axios.post('http://localhost:4000/api/generateVideoDescription');
      if (response.status === 200) {
        setTranscript(response.data.text);
      } else {
        setTranscript('Error in fetching transcript');
      }
    } catch (error) {
      console.error('Error fetching transcript:', error);
      setTranscript('Error in fetching transcript');
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };



  const videos = data.videos;
  let maxViews = 0;
  let peakVideo = null;
  let totalViews=0;
  let totalVideos=0;
  
  videos.forEach((video) => {
      const views = parseInt(video.views);
      totalViews+=views;
      totalVideos+=1;
      if (views > maxViews) {
          maxViews = views;
          peakVideo = video;

      }
  });
  
  console.log("Peak Video:");
  console.log(peakVideo);

  const [predication,setPrediction]=useState({})


  const fetchData=async()=>{
    const response=await axios.get('http://localhost:4000/youtubeData/profile')
    console.log(response.data);
    setPrediction(predication)
  }

  useEffect(()=>{
    fetchData();
  },[])


  const getPrediction=async()=>{
    const response=await axios.get('http://localhost:4000/api/predict')
    console.log(response.data);
    setPrediction(response.data)
    
  }

  useEffect(()=>{
    getPrediction();
  },[])
  


  return (
    <DefaultLayout>
      <div>
        <div className="container flex flex-col gap-4 md:flex-row">
          <div className="w-full md:w-1/3">
            <div className="rounded-xl bg-white p-3">
              <h1 className="p-2 font-semibold text-black">Peak Video</h1>
              <div className="mt-2 flex aspect-video w-full  items-center justify-center overflow-hidden rounded-lg">
                <iframe
                  src={`https://www.youtube.com/embed/${peakVideo.id}?si=bnjb1GruB596tAbV`}
                  frameBorder={0}
                  allowFullScreen
                  className="mt-4 h-full w-11/12 rounded-lg"
                />
              </div>
              <h1 className="font-sans ml-4 mt-2 font-semibold text-black">
                {peakVideo?.title}
              </h1>
              <p className="ml-4">Created on :{peakVideo?.uploadedVideoDate}</p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
                <div className="m-2 rounded-lg bg-purple-200 p-2 text-xl text-purple-900">
                  {totalViews}
                  <br />
                  Total Views
                </div>
                <div className="m-2 rounded-lg bg-sky-100 p-2 text-xl text-sky-900">
                 {totalVideos}
                  <br />
                  Total Videos
                </div>
              </div>
             
              <div>
                {/* show the predictaed data */}

                
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
                <div className="m-2 rounded-lg bg-purple-200 p-2 text-xl text-purple-900">
                  {predication.predictedLikes}
                  <br />
                  Predicted Likes(per video)
                    </div>

                <div className="m-2 rounded-lg bg-sky-100 p-2 text-xl text-sky-900">
                  {predication?.predictedViews}
                  <br />
                 Predicted Views(per video)

                    </div>
                    </div>
            </div>
          </div>
          <div className="w-full  md:w-2/3">
            <div className="rounded-lg bg-white">
              <h1 className="p-2 text-lg font-bold text-black">
                Statistics of your youtube channel : {data.channelTitle}
              </h1>
              <div>
                <p className="p-2">{data.channelDescription}</p>
          
                  <VideoViewsChart data={data} /> 
              </div>
            </div>

            {
              data.videos.map((video)=>(
                <div className="mt-4 rounded-lg bg-white">
                <div className="flex flex-wrap items-center gap-4 p-2">
                  <div>
                    <div className="flex">
                      <iframe
                        src={`https://www.youtube.com/embed/${video.id}?si=bnjb1GruB596tAbV`}
                        frameBorder={0}
                        allowFullScreen
                        className="mt-4 rounded-lg"
                      />
                    </div>
                <div className="p-2 border-black border mt-10 rounded-2xl">
                <PieChart  data={video}/>
                  </div>
                  </div>
                  <div className="mt-8">
                    <div>Title : {video.title}</div>
                    <div>
                    Views:{video.views}  &nbsp; &nbsp;Likes: {video.likes} &nbsp; &nbsp; Comments: {video.comments}
                    </div>
                  </div>
                  <div className="ml-auto">
                  <Link href={`/youtube/${video.id}`}>
                    <button
                     
                      className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
                    >
                     Get Transcript
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
              ))
            }
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
