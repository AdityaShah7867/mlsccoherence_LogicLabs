const express = require('express');
const session = require('express-session');
const passport = require('passport');
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;

const app = express();

// Configure express-session middleware
app.use(session({
    secret: 'your_secret_key', 
    resave: false,
    saveUninitialized: true
}));


app.use(passport.initialize());
app.use(passport.session());

// Configure Passport
passport.use(new LinkedInStrategy({
    clientID: '77n4ydyvwhe6mf',
    clientSecret: 'aT2jXE8Thqp1lqYn',
    callbackURL: "http://localhost:3000/auth/linkedin/callback",
    scope: ['email'],
},
    function (accessToken, refreshToken, profile, done) {
        console.log(profile); 
        return done(null, profile);
    }
));

// Serialize and Deserialize user (needed for session management)
passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (obj, done) {
    done(null, obj);
});

// Route for initiating LinkedIn authentication
app.get('/auth/linkedin',
    passport.authenticate('linkedin', { state: 'your_state' }));

// Route for LinkedIn callback after authentication
app.get('/auth/linkedin/callback',
    passport.authenticate('linkedin', { failureRedirect: '/login' }),
    function (req, res) {
        // Successful authentication, redirect to profile page or send response
        res.redirect('/profile');
    });

// Route for displaying the user's profile (after authentication)
app.get('/profile', ensureAuthenticated, function (req, res) {
    // Access user profile data from the req.user object
    res.send('Welcome, ' + req.user.displayName + '! Your LinkedIn ID is: ' + req.user.id);
    console.log(req.user);
});

// Route for logging out
app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});

// Middleware to ensure authentication
function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});