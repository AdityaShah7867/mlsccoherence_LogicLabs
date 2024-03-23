'use client'
import React, { useRef, useEffect } from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useParams } from 'react-router-dom';

const Page: React.FC = () => {
    const { roomCode = '' } = useParams<{ roomCode?: string }>();

  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const Mymeeting = async () => {
      const appID = 425281463;
      const serverSecret = "902a3cab305b108a2eb824a880a16d42";
      const userDisplayName = "username"; // You can replace this with your user's display name

      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomCode, Date.now().toString(), userDisplayName);
      const zp = ZegoUIKitPrebuilt.create(kitToken);
      zp.joinRoom({
        container: elementRef.current!,
        scenario: {
          mode: ZegoUIKitPrebuilt.VideoConference,
        },
      });
    };

    Mymeeting();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomCode]);

  return (
    <DefaultLayout>
      <center>
        <div className='container -ml-16 flex justify-center items-center align-middle h-screen ' >
          <div className='w-screen p-3 pt-3 mt-3' ref={elementRef} />
        </div>
      </center>
    </DefaultLayout>
  );
}

export default Page;
