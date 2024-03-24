'use client'
import React, { useEffect } from "react";

declare global {
  interface Window {
    botpressWebChat: any; // Define the botpressWebChat property on the Window interface
  }
}

const Chatbot: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.botpressWebChat) {
        window.botpressWebChat.init({
          botId: "5008f4fd-6f2a-4a41-ab56-df5b3c8f9c2c",
          hostUrl: "https://cdn.botpress.cloud/webchat/v1",
          messagingUrl: "https://messaging.botpress.cloud",
          clientId: "5008f4fd-6f2a-4a41-ab56-df5b3c8f9c2c",
          composerPlaceholder: "Hello !",
          botConversationDescription: "Your AI ASSISTANT",
          webhookId: "cca5cd6f-81d9-464c-9d6e-76770c972f6f",
          lazySocket: true,
          themeName: "prism",
          botName: "NOTES GURU",
          avatarUrl:
            "https://www.iconarchive.com/download/i143626/iconarchive/robot-avatar/Blue-2-Robot-Avatar.1024.png",
          frontendVersion: "v1",
          enableConversationDeletion: true,
          theme: "prism",
          themeColor: "#2563eb",
        });
      } else {
        console.error("botpressWebChat not initialized");
      }
    };
  }, []);

  return <div id="webchat" className="z-999"/>;
};

export default Chatbot;
