const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const {Authorization,RedirectHandler}=require('./authHelper')
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();

const postRoutes = require('./routes/post.routes');
const userRoutes = require('./routes/user.routes');
const scheduleRoutes=require('./routes/schedule.routes')

app.use(express.json());

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
app.get('/api/linkedin/authorize',(req,res)=>{
    res.redirect(Authorization())
})

app.get('/auth/linkedin/callback',(req,res)=>{
    res.redirect(RedirectHandler(req.query.code))
})
app.use('/api/post', postRoutes);
app.use('/api/user', userRoutes);
app.use('/api/schedule',scheduleRoutes)



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
const generate = async (req,res) => {
    try {
      const prompt = 'Write a instagram caption for a photo of a sunset.';
      const result = await geminiModel.generateContent(prompt);
      const response = result.response;
      console.log(response.text());

        res.send(response.text())
    } catch (error) {
      console.log('response error', error);

        res.send('error')
    }
  };
 

  const reWriteWithAI=async(req,res)=>{
    try {
        const prompt = req.body.text;
        const result = await geminiModel.generateContent("correct the  following sentence:\n\n"+prompt);
        const response = result.response;
        console.log(response.text());
  
          res.send(response.text())
      } catch (error) {
        console.log('response error', error);
  
          res.send('error')
      }
  }


app.post('/api/generate',generate)
app.post('/api/rewrite',reWriteWithAI)