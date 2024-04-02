const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const { Authorization, RedirectHandler } = require('./authHelper')
const { GoogleGenerativeAI } = require('@google/generative-ai');
const cors = require('cors')
require('dotenv').config();
const fs = require('fs');

const app = express();

const postRoutes = require('./routes/post.routes');
const userRoutes = require('./routes/user.routes');
const scheduleRoutes = require('./routes/schedule.routes')
const youtubeRoutes = require('./controllers/youtube.controllers')
const youtubeDataRoutes = require('./controllers/youtubeData.controllers')
const instagraDataRoutes = require('./controllers/instagram.controllers')

app.use(express.json());
app.use(cors())

// app.use(session({
//     secret: 'your_secret_key',
//     resave: false,
//     saveUninitialized: true
// }));

// app.use(passport.initialize());
// app.use(passport.session());

// passport.use(new LinkedInStrategy({
//     clientID: '7794mz5qhl2zdd',
//     clientSecret: '8k201IYAOncZrCVJ',
//     callbackURL: "http://localhost:4000/auth/linkedin/callback",
//     scope: ['email'],
// },
//     function (accessToken, refreshToken, profile, done) {
//         console.log(profile);
//         return done(null, profile);
//     }
// ));

// passport.serializeUser(function (user, done) {
//     done(null, user);
// });

// passport.deserializeUser(function (obj, done) {
//     done(null, obj);
// });

// app.get('/auth/linkedin',
//     passport.authenticate('linkedin'));

// app.get('/auth/linkedin/callback',
//     passport.authenticate('linkedin', { failureRedirect: '/login' }),
//     function (req, res) {
//         res.redirect('/profile');
//     });

// app.get('/profile', ensureAuthenticated, function (req, res) {
//     res.send('Welcome, ' + req.user.displayName + '! Your LinkedIn ID is: ' + req.user.id);
//     console.log(req.user);
// });

// app.get('/logout', function (req, res) {
//     req.logout();
//     res.redirect('/');
// });

// function ensureAuthenticated(req, res, next) {
//     if (req.isAuthenticated()) {
//         return next();
//     }
//     res.redirect('/login');
// }
app.get('/api/linkedin/authorize', (req, res) => {
  res.redirect(Authorization())
})

app.get('/auth/linkedin/callback', (req, res) => {
  res.redirect(RedirectHandler(req.query.code))
})
app.use('/api/post', postRoutes);
app.use('/api/user', userRoutes);
app.use('/api/schedule', scheduleRoutes)
app.use('/api/youtube', youtubeRoutes)
app.use('/youtubeData', youtubeDataRoutes)
app.use('/instagramData', instagraDataRoutes)


mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log('Connected to MongoDB');
})


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


let API_KEY = 'AIzaSyA0RhWRyVzHpJPwMhjrPwUtxyRmwOBp4hs'
let modelName = 'gemini-pro'

const gemini_api_key = process.env.API_KEY;
const googleAI = new GoogleGenerativeAI(API_KEY);
const geminiConfig = {
  temperature: 0.9,
  topP: 1,
  topK: 1,
  maxOutputTokens: 4096,
};

const geminiModel = googleAI.getGenerativeModel({
  model: 'gemini-pro',
  geminiConfig,
});
const generate = async (req, res) => {
  let prompt = req.body.prompt
  try {

    const result = await geminiModel.generateContent(prompt);
    const response = result.response;
    console.log(response.text());

    res.send({
      text: response.text(),

    })
  } catch (error) {
    console.log('response error', error);

    res.send('error')
  }
};


const reWriteWithAI = async (req, res) => {
  try {
    const prompt = req.body.prompt;
    const result = await geminiModel.generateContent("correct the following caption:\n\n" + prompt);
    const response = result.response;
    console.log(response.text());

    res.send(response.text())
  } catch (error) {
    console.log('response error', error);

    res.send('error')
  }
}

const genAI = new GoogleGenerativeAI(API_KEY);

const generateByImage = async (req, res) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

    const prompt = "Write a caption for this with Hashtags?";
    const image = {
      inlineData: {
        data: Buffer.from(fs.readFileSync("insta.png")).toString("base64"),
        mimeType: "image/png",
      },
    };

    const result = await model.generateContent([prompt, image]);
    res.status(200).json({
      caption: result.response.text()
    })
  } catch (error) {
    console.log('response error', error);

    res.send('error')
  }
}

app.post('/api/generate', generate)
app.post('/api/rewrite', reWriteWithAI)
app.post('/api/generateByImage', generateByImage)

const generateVideoDescription = async (req, res) => {
  try {
    const prompt = 'describe the video this video is about coding and github and what can be done better in this https://youtube.com/watch?v=BMTS0F_6VCs&t=6';
    const result = await geminiModel.generateContent(prompt);
    const response = result.response;
    console.log(response.text());

    res.status(200).json({
      description: response.text()
    })
  } catch (error) {
    console.log('response error', error);

    res.send('error')
  }
};

app.post('/api/generateVideoDescription', generateVideoDescription)