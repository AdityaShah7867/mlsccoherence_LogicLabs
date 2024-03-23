const { GoogleGenerativeAI } =require('@google/generative-ai');
require('dotenv').config();
const fs = require('fs');

 
let API_KEY = 'AIzaSyA0RhWRyVzHpJPwMhjrPwUtxyRmwOBp4hs'
// let modelName = 'gemini-pro'
// const gemini_api_key = process.env.API_KEY;
// const googleAI = new GoogleGenerativeAI(API_KEY);
// const geminiConfig = {
//   temperature: 0.9,
//   topP: 1,
//   topK: 1,
//   maxOutputTokens: 4096,
// };
 
// const geminiModel = googleAI.getGenerativeModel({
//   model: 'gemini-pro',
//   geminiConfig,
// });
 
// const generate = async () => {
//   try {
//     const prompt = 'Tell me about google.';
//     const result = await geminiModel.generateContent(prompt);
//     const response = result.response;
//     console.log(response.text());
//   } catch (error) {
//     console.log('response error', error);
//   }
// };
 
// generate();


const genAI = new GoogleGenerativeAI(API_KEY);

// const generate=async()=>{
//     const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

// const prompt = "Write a caption for this with Hashtags?";
// const image = {
//   inlineData: {
//     data: Buffer.from(fs.readFileSync("insta.png")).toString("base64"),
//     mimeType: "image/png",
//   },
// };

// const result = await model.generateContent([prompt, image]);
// console.log(result.response.text());
// }
const getVideoDetails = async (url) => {
  // Extract video ID from URL
  const videoId = url.split('v=')[1];
  // Make API request to fetch video details
  const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${API_KEY}&part=snippet`);
  const data = await response.json();
  // Extract relevant details
  const { title, channelTitle, publishedAt } = data.items[0].snippet;
  return { title, channelTitle, uploadDate: publishedAt };
};

// const geminiModel = googleAI.getGenerativeModel({
//   model: 'gemini-pro',
//   geminiConfig,
// });

const generateVideoDescription=async (url) => {
 
  try {
    const videoDetails = await getVideoDetails(url);
    const { title, channelTitle, uploadDate } = videoDetails;

    const prompt = `Write a concise and engaging description for a YouTube video titled '${title}' uploaded by '${channelTitle}' on '${uploadDate}'. Briefly describe the video content.`;
    const description = await geminiModel.generateContent(prompt); 

    res.json({ description });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

generateVideoDescription('https://www.youtube.com/watch?v=RlPNh_PBZb4');



// generate()