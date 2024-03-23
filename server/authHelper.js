  require('dotenv').config()
const Authorization = () => {
  const clientId = encodeURIComponent(process.env.CLIENT_ID);
  const responseType = encodeURIComponent('code');
  const scope = encodeURIComponent(process.env.SCOPE);
  const redirectUri = encodeURIComponent(process.env.REDIRECT_URI);

  return `https://linkedin.com/oauth/v2/authorization?client_id=${clientId}&response_type=${responseType}&scope=${scope}&redirect_uri=${redirectUri}`;
}

const RedirectHandler = (code) => {
    const payload = {
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: process.env.REDIRECT_URI,
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET
    };

    console.log(payload)
}

module.exports={
    Authorization,
    RedirectHandler
}