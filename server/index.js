const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;

const app = express();

const postRoutes = require('./routes/post.routes');
const userRoutes = require('./routes/user.routes');

app.use(express.json());

app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LinkedInStrategy({
    clientID: '7794mz5qhl2zdd',
    clientSecret: '8k201IYAOncZrCVJ',
    callbackURL: "http://localhost:4000/auth/linkedin/callback",
    scope: ['email'],
},
    function (accessToken, refreshToken, profile, done) {
        console.log(profile);
        return done(null, profile);
    }
));

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (obj, done) {
    done(null, obj);
});

app.get('/auth/linkedin',
    passport.authenticate('linkedin'));

app.get('/auth/linkedin/callback',
    passport.authenticate('linkedin', { failureRedirect: '/login' }),
    function (req, res) {
        res.redirect('/profile');
    });

app.get('/profile', ensureAuthenticated, function (req, res) {
    res.send('Welcome, ' + req.user.displayName + '! Your LinkedIn ID is: ' + req.user.id);
    console.log(req.user);
});

app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}

app.use('/api/post', postRoutes);
app.use('/api/user', userRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});