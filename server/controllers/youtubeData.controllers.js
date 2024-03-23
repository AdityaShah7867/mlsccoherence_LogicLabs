const express = require('express');
const session = require('express-session');
const { OAuth2Client } = require('google-auth-library');
const { google } = require('googleapis');
const { content } = require('googleapis/build/src/apis/content');
const router=express.Router()

const app = express();


const CLIENT_ID = '164586149788-rlpoupm2q9r4mfu6ek7af45burv12s98.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URL = 'http://localhost:8000/api/v1/auth/google/callback';

const apiKey = 'AIzaSyCjR6nPmf0nvgdT-VwTZmcLLX6PwG9IxBI'; 


const oAuth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);

app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));

router.get('/', (req, res) => {
    const authUrl = oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: [
            'https://www.googleapis.com/auth/youtube.readonly',
            'https://www.googleapis.com/auth/youtube.force-ssl',
            'https://www.googleapis.com/auth/youtube', // Add other necessary scopes here
        ].join(' '), // Join scopes into a single string
    });
    res.redirect(authUrl);
});


router.get('/api/v1/auth/google/callback', async (req, res) => {
    try {
        const { code } = req.query;
        const { tokens } = await oAuth2Client.getToken(code);

        // Store the tokens in the session or your database
        req.session.tokens = tokens;

        res.redirect('/profile');
    } catch (error) {
        console.error('Error during token exchange:', error);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/profile', async (req, res) => {
    try {
        const { tokens } = req.session;
        if (!tokens) {
            res.redirect('/');
            return;
        }

        // Set OAuth2 credentials
        oAuth2Client.setCredentials(tokens);

        // Use OAuth2 credentials to fetch the channel ID and channel information
        const channelResponse = await google.youtube('v3').channels.list({
            auth: oAuth2Client,
            part: 'snippet,statistics',
            mine: true,
        });

        const channel = channelResponse.data.items[0];
        const channelId = channel.id;
        const channelTitle = channel.snippet.title;
        const channelDescription = channel.snippet.description;
        const channelStatistics = channel.statistics;

        // Use the channel ID to fetch videos
        const videosResponse = await google.youtube('v3').search.list({
            auth: oAuth2Client,
            part: 'snippet',
            channelId: channelId,
            maxResults: 10, // Adjust the number of results as needed
            order: 'date', // Order the videos by date
            type: 'video', // Only retrieve videos
        });
        const videos = videosResponse.data.items;
        const videoTitles = videos.map(video => video.snippet.title);

        res.send(`
            <h1>My Channel</h1>
            <h2>${channelTitle}</h2>
            <p>${channelDescription}</p>
            <p>Subscribers: ${channelStatistics.subscriberCount}</p>
            <p>Total Views: ${channelStatistics.viewCount}</p>
            <p>Total Videos: ${channelStatistics.videoCount}</p>
            <h1>My Channel Videos</h1>
            <ul>
               ${videoTitles.map(title => {title}).join('')}
            </ul>
        `);
    } catch (error) {
        console.error('Error fetching channel data:', error);
        res.status(500).send('Internal Server Error');
    }
});


module.exports=router



