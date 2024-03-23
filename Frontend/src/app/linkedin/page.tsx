"use client";
import React, { useEffect, useState } from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import ChartOne from "@/components/Charts/ChartOne";
import axios from "axios";

// Define types/interfaces for LinkedIn data
interface LinkedInEducation {
  title: string;
  subtitle: string;
  caption: string;
}

interface LinkedInData {
  data: {
    fullName: string;
    profilePic: string;
    addressWithCountry: string;
    connections: number;
    followers: number;
    educations: LinkedInEducation[];
  };
}

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [linkedinData, setLinkedinData] = useState<LinkedInData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.post(
          "https://linkedin-data-scraper.p.rapidapi.com/person_deep",
          {
            link: "http://www.linkedin.com/in/aditya-shah-a10494263",
          },
          {
            headers: {
              "content-type": "application/json",
              "X-RapidAPI-Key":
                "5c7c9aa9famsh59c0c1ec2fda29fp15dce6jsn5870bcca0bf1",
              "X-RapidAPI-Host": "linkedin-data-scraper.p.rapidapi.com",
            },
          },
        );
        setLinkedinData(response.data);
      } catch (error) {
        setError("Failed to fetch data");
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (!linkedinData) {
      fetchData();
    }
  }, [linkedinData]);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <DefaultLayout>
      {isLoading && <p>Loading...</p>}
      {/* {error && <p>{error}</p>} */}
      {linkedinData && (
        <div className="container flex flex-col gap-4 md:flex-row">
          <div className="w-full md:w-1/3">
            <div className="rounded-xl bg-white p-3">
              <h1 className="p-2 font-semibold text-black">
                {linkedinData?.data?.fullName}
              </h1>
              <div className="mt-2 flex aspect-video w-full  items-center justify-center overflow-hidden rounded-lg">
                <img
                  src={linkedinData.data?.profilePic}
                  className=""
                  alt="Profile Pic"
                />
              </div>
              <h1 className="font-sans ml-4 mt-2 font-semibold text-black">
                Address: {linkedinData?.data?.addressWithCountry}
              </h1>
              <p className="ml-4">Created on :</p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
                <div className="m-2 rounded-lg bg-purple-200 p-2 text-xl text-purple-900">
                  {linkedinData?.data?.connections}
                  <br />
                  Total Connections :
                </div>
                <div className="m-2 rounded-lg bg-sky-100 p-2 text-xl text-sky-900">
                  {linkedinData?.data?.followers}
                  <br />
                  Total Followers
                </div>
              </div>
            </div>
            <div>
              <h1 className="p-2 font-semibold text-black">Education</h1>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {linkedinData?.data?.educations?.map((education, index) => (
                  <div
                    key={index}
                    className="rounded-lg bg-white p-4 shadow-md"
                  >
                    <h2 className="text-xl font-semibold">{education.title}</h2>
                    <p className="text-gray-600">{education?.subtitle}</p>
                    <p className="text-gray-600">{education?.caption}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full  md:w-2/3">
            <div className="bg-white text-black">
              <div>
                <div>
                  <div>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      {linkedinData.data.licenseAndCenrtificates.map(
                        (certificate: any, index: number) => (
                          <div key={index} className="rounded-lg bg-white p-4 ">
                            <h2 className="text-xl font-semibold">
                              {certificate.title}
                            </h2>
                            <p className="text-gray-600">
                              {certificate.subtitle}
                            </p>
                            <p className="text-gray-600">
                              {certificate.caption}
                            </p>
                            <p className="text-gray-600">
                              Issued: {certificate.metadata}
                            </p>
                            <a
                              href={certificate.companyLink1}
                              className="text-blue-600 hover:underline"
                            >
                              View on LinkedIn
                            </a>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>
                
              </div>
              <div className="mt-12 bg-white">
                <span className="text-2xl ">
                  Skills : 
                </span>
                  {linkedinData?.data?.skills?.map(
                    (skills: any, index: number) => (
                      <div
                        key={index}
                        className="rounded-lg bg-white p-4 shadow-md"
                      >
                        <h2 className="text-xl font-semibold">
                          {skills?.title}
                        </h2>
                        
                      </div>
                    ),
                  )}
                </div>
            </div>
          </div>
        </div>
      )}
      {isModalOpen && (
        <div className="bg-gray-200 fixed inset-0 flex items-center justify-center bg-opacity-50">
          {/* Modal component */}
        </div>
      )}
    </DefaultLayout>
  );
};

export default Page;
