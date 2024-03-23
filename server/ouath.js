
const express = require('express');
const dotenv = require('dotenv');
const { AuthClient, RestliClient } = require('linkedin-api-client');

dotenv.config();

const app = express();
const port = 4000;

// Start off with no access token
let accessToken = '';


if (!(process.env.CLIENT_ID && process.env.CLIENT_SECRET && process.env.OAUTH2_REDIRECT_URL)) {
  throw new Error(
    'The CLIENT_ID, CLIENT_SECRET, and OAUTH2_REDIRECT_URL variables must be set in the .env file.'
  );
}
const authClient = new AuthClient({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  redirectUrl: process.env.OAUTH2_REDIRECT_URL
});
const restliClient = new RestliClient();
restliClient.setDebugParams({ enabled: true });

// Route to display profile details
app.get('/', (_req, res) => {
  if (!accessToken) {
    // If no access token, have member authorize again
    res.redirect(authClient.generateMemberAuthorizationUrl(['email']));
  } else {
    // Fetch profile details
    restliClient
      .get({
        resourcePath: '/userInfo',
        accessToken
      })
      .then((response) => {
        res.json(response.data);
      })
      .catch(() => {
        res.send('Error encountered while fetching profile.');
      });
  }
});

// OAuth callback route handler
app.get('/auth/linkedin/callback', (req, res) => {
  const authCode = req.query?.code ;
  if (authCode) {
    // Exchange auth code for an access token and redirect to main page
    authClient
      .exchangeAuthCodeForAccessToken(authCode)
      .then((response) => {
        accessToken = response.access_token;
        console.log(`Access token: ${accessToken}`);
        res.redirect('/');
      })
      .catch(() => {
        res.send('Error exchanging auth code for access token.');
      });
  } else {
    if (req.query?.error_description) {
      res.send(`Error: ${req.query?.error_description }`);
    } else {
      res.send('Expecting "code" query parameter');
    }
  }
});

app.listen(port, () => {
  console.log(`Navigate to example app at http://localhost:${port}`);
});