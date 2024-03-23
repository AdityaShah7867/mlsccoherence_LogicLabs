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

const generate=async()=>{
    const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

const prompt = "Write a caption for this with Hashtags?";
const image = {
  inlineData: {
    data: Buffer.from(fs.readFileSync("insta.png")).toString("base64"),
    mimeType: "image/png",
  },
};

const result = await model.generateContent([prompt, image]);
console.log(result.response.text());
}

generate()