"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        users={users}
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
               SMART ANALYTICS
              </span>
            </h1>
          </>
        }
      />
    </div>
  );
}

export const users = [
  {
    name: "Manu Arora",
    image: "https://imgs.search.brave.com/lVVLXkTLfre5ccIoqwmuVBO1BXVZP-NXPETJtjdcIXM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9kM2Rz/MHI4aWp2azd1Ni5j/bG91ZGZyb250Lm5l/dC93cC1jb250ZW50/L3VwbG9hZHMvc2l0/ZXMvMy8yMDE2LzEx/LzA0MTAyMDUxL3dh/bG1hcnQucG5n",
    badge: "Mentor",
  },
  {
    name: "Sarah Singh",
    image: "https://imgs.search.brave.com/M8nfb3y2CbpgSRxSP9W-mehlWJgQJWTTX7Rq64k76hs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5zcHJvdXRzb2Np/YWwuY29tL3VwbG9h/ZHMvMjAyMC8wNC9T/Y3JlZW4tU2hvdC0y/MDIwLTA0LTE5LWF0/LTQuMDAuMjQtUE0u/cG5n",
    badge: "Mentor",
  },
  {
    name: "John Doe",
    image: "https://imgs.search.brave.com/KJoopaw7qJqSIIYF6foTpcIpI-uih-ibZWOitoeJtKA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9ibG9n/Lmh1YnNwb3QuY29t/L2hzLWZzL2h1YmZz/L05hdHVyZXMlMjBQ/YXRoLmpwZz93aWR0/aD00NTAmbmFtZT1O/YXR1cmVzJTIwUGF0/aC5qcGc",
    badge: "Mentor",
  },
  {
    name: "Jane Smith",
    image: "https://imgs.search.brave.com/rL04rLbltQU3rG_uPwKTuNg1nZbIqxeAzaclayacOzc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/d29yZHN0cmVhbS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjIvMDIvZW5nYWdp/bmctZmFjZWJvb2st/cG9zdC1pZGVhcy1z/dXBlcmJvd2wuanBn",
    badge: "Mentor",
  },
  {
    image: "https://imgs.search.brave.com/BzbkVjd1ZHhI-ck_V6fXlneS65YeQNJPrWNIvVaF9pM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zcC1h/by5zaG9ydHBpeGVs/LmFpL2NsaWVudC90/b19hdXRvLHFfbG9z/c3kscmV0X2ltZyx3/XzcyMCxoXzE1NjAv/aHR0cHM6Ly9sb3Vp/c2VtLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxMy8wMS83/LWZhY2Vib29rLXBo/b3RvLXBvc3Qtd2l0/aC1saW5rLmpwZw",
    badge: "Mentor",
  },
  {
    name: "Emily Davis",
    image: "https://imgs.search.brave.com/En_rumi9dFfiPQcMM9F9uoTBxfsBZ60kkFvrr3Zszt0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idWZm/ZXIuY29tL3Jlc291/cmNlcy9jb250ZW50/L2ltYWdlcy9yZXNv/dXJjZXMvd3AtY29u/dGVudC91cGxvYWRz/LzIwMTMvMTEvU2Ny/ZWVuLVNob3QtMjAx/My0xMS0xMi1hdC04/LjQ3LjA0LXBtLnBu/Zw",
    badge: "Mentor",
  },
  {
    name: "Michael Miller",
    image: "https://imgs.search.brave.com/iD36IUlyrkllv_9xvN3Z8j1NTDQ5glw9OSubiZ9mniw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9uZWFs/c2NoYWZmZXIuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy9TY3Jl/ZW4tU2hvdC0yMDIx/LTA2LTEzLWF0LTEu/MTQuNTItUE0tMTIw/MHg5MzMucG5n",
    badge: "Mentor",
  },
  {
    name: "Sarah Brown",
    image: "https://imgs.search.brave.com/MlAdfffstnKz0gT4EsA-ZMjmOqB2h3reZazwA1eUUiE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/ZWRpZ2l0YWxhZ2Vu/Y3kuY29tLmF1L3dw/LWNvbnRlbnQvdXBs/b2Fkcy9yZWNvbW1l/bmRlZC1pbWFnZS1z/aXplLUxpbmtlZElu/LXBvc3Qtb3B0aW1h/bC1ob3Jpem9udGFs/LWV4YW1wbGUucG5n",
  },
  {
    name: "James Wilson",
    image: "https://imgs.search.brave.com/ar_ZH__MdOQW4STs0rLeifVP41OVpHWozSO0SfLt9dc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLmVh/c2lsLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxOTA3MjQx/NjA3MDYvR29sZGll/LUNoYW4tTElua2Vk/SW4tODAweDQwNS5w/bmc",
    badge: "Something",
  },
  {
    name: "Patricia Moore",
    image: "https://imgs.search.brave.com/C2nZoBu3nI9Jd14aXeHbypAuqK8_Z9cuD0wzQHnlMOE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/bGlua2VkaGVscGVy/LmNvbS9ibG9nL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIzLzA4/L2xpbmtlZGluLXBy/b2ZpbGUtaGVhZGVy/LWV4YW1wbGUucG5n",
    badge: "Mentor",
  },
  {
    name: "Richard Taylor",
    image: "https://picsum.photos/id/20/300/300",
  },
  {
    name: "Linda Anderson",
    designation: "Backend Developer, ServerSecure",
    image: "https://picsum.photos/id/21/300/300",
  },
  {
    name: "William Thomas",
    designation: "Full Stack Developer, FullStack",
    image: "https://picsum.photos/id/22/300/300",
    badge: "Badger",
  },
  {
    name: "Elizabeth Jackson",
    designation: "Project Manager, ProManage",
    image: "https://picsum.photos/id/23/300/300",
    badge: "Mentor",
  },
  {
    name: "David White",
    designation: "Database Administrator, DataSafe",
    image: "https://picsum.photos/id/24/300/300",
    badge: "Advocate",
  },
  {
    name: "Jennifer Harris",
    designation: "Network Engineer, NetConnect",
    image: "https://picsum.photos/id/25/300/300",
  },
  {
    name: "Charles Clark",
    designation: "Security Analyst, SecureIT",
    image: "https://picsum.photos/id/26/300/300",
  },
  {
    name: "Susan Lewis",
    designation: "Systems Analyst, SysAnalyse",
    image: "https://picsum.photos/id/27/300/300",
  },
  {
    name: "Joseph Young",
    designation: "Mobile Developer, AppDev",
    image: "https://picsum.photos/id/28/300/300",
    badge: "Mentor",
  },
  {
    name: "Margaret Hall",
    designation: "Quality Assurance, BugFree",
    image: "https://picsum.photos/id/29/300/300",
    badge: "Developer",
  },
];