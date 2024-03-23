const express = require('express');
const { google } = require('googleapis');
const natural = require('natural');
const SentimentAnalyzer = require('natural').SentimentAnalyzer;
const stemmer = require('natural').PorterStemmer;

const router = express.Router();

const tokenizer = new natural.WordTokenizer();
const analyzer = new SentimentAnalyzer('English', stemmer, 'afinn');

const api_service_name = "youtube";
const api_version = "v3";
const DEVELOPER_KEY = "AIzaSyC8Xb_ioImfTDTacuGyl4vpxsLYTZ9afq0";

const youtube = google.youtube({
  version: api_version,
  auth: DEVELOPER_KEY
});

router.get('/analyzeComments', async (req, res) => {
    try {
      const youtubeRes = await youtube.commentThreads.list({
        part: "snippet",
        videoId: "NqD0SMWmXbg",
        maxResults: 100
      });
  
      const comments = youtubeRes.data.items.map(item => item.snippet.topLevelComment.snippet.textDisplay);
      const analyzedComments = [];
      
      comments.forEach(comment => {
        const tokens = tokenizer.tokenize(comment);
        const sentiment = analyzer.getSentiment(tokens);
        analyzedComments.push({ comment: comment, sentiment: sentiment });
      });
  
      // Calculate the mean sentiment score
      let meanSentiment = null;
      if (analyzedComments.length > 0) {
        const totalSentiment = analyzedComments.reduce((acc, curr) => acc + curr.sentiment, 0);
        
        meanSentiment = totalSentiment / analyzedComments.length;
      }
  
      res.json({ analyzedComments: analyzedComments, meanSentiment: meanSentiment });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'An error occurred while fetching and analyzing comments' });
    }
  });
  

module.exports = router;
