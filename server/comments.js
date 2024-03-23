const natural = require('natural');
const tokenizer = new natural.WordTokenizer();
const SentimentAnalyzer = require('natural').SentimentAnalyzer;
const stemmer = require('natural').PorterStemmer;
const analyzer = new SentimentAnalyzer('English', stemmer, 'afinn');

// Sample comments from users
const comments = [
    "I love this product! It's amazing.",
    "The customer service was terrible. I had a bad experience.",
    "This app is okay, but it could be improved.",
    "I'm satisfied with the quality of the service.",
    "The performance of the website is very slow.",
    "The food was delicious and the staff were friendly.",
];

// Perform sentiment analysis on each comment
comments.forEach(comment => {
    const tokens = tokenizer.tokenize(comment);
    const sentiment = analyzer.getSentiment(tokens);
    console.log(`Comment: "${comment}"`);
    console.log(`Sentiment: ${sentiment}`);
    console.log('------------------------');
});
