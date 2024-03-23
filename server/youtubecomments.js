const { google } = require('googleapis');
const natural = require('natural');
const tokenizer = new natural.WordTokenizer();
const SentimentAnalyzer = require('natural').SentimentAnalyzer;
const stemmer = require('natural').PorterStemmer;
const analyzer = new SentimentAnalyzer('English', stemmer, 'afinn');

const api_service_name = "youtube";
const api_version = "v3";
const DEVELOPER_KEY = "AIzaSyC8Xb_ioImfTDTacuGyl4vpxsLYTZ9afq0";

const youtube = google.youtube({
  version: api_version,
  auth: DEVELOPER_KEY
});

youtube.commentThreads.list({
  part: "snippet",
  videoId: "aUI96T7O2gQ",
  maxResults: 100
}, (err, res) => {
  if (err) {
    console.error('Error:', err);
    return;
  }
  const comments = res.data.items.map(item => item.snippet.topLevelComment.snippet.textDisplay);

  comments.forEach(comment => {
    const tokens = tokenizer.tokenize(comment);
    const sentiment = analyzer.getSentiment(tokens);
    console.log(`Comment: "${comment}"`);
    console.log(`Sentiment: ${sentiment}`);
    console.log('------------------------');
});

  

});
