const express = require('express');
const axios = require('axios');
const router=express.Router()


const getInstagramData = async (username) => {
    const options = {
        method: 'GET',
        url: 'https://instagram130.p.rapidapi.com/account-info',
        params: {
          username: username
        },
        headers: {
          'X-RapidAPI-Key': '03efd5a285mshe7331c9d611b7f7p143fd2jsn5b7e913e6da3',
          'X-RapidAPI-Host': 'instagram130.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
      } catch (error) {
          console.error(error);
      }
}      

// Define your route to fetch Instagram data
router.get('/', async (req, res) => {
    try {
        const accessToken = 'IGQWRNQXc1RGF5Y09XX0VHV002MTN2UFFteC1LbDdsdHlQY0pzb0lZAMTFUUDNCbVk4X3NfSGloNWc4UVVmeFVsVE5GdmMwQlh2eG9WX3pkalFvMG9scEljUlhDOUNWVktfMlhNT0R5ZAU1tTkhoQldZAQVFpX1hVUWsZD';
        const apiUrl = `https://graph.instagram.com/me?fields=id,username&access_token=${accessToken}`;

        // Fetch basic user data from Instagram Graph API
        const userDataResponse = await axios.get(apiUrl);

        // Fetch additional data if needed, adjust fields as required
        const userId = userDataResponse.data.id;
        const additionalFields = 'media_count,followers_count,follows_count'; // Add any additional fields you need
        const additionalApiUrl =`https://graph.instagram.com/${userId}?fields=${additionalFields}&access_token=${accessToken}`;
        const additionalDataResponse = await axios.get(additionalApiUrl);

        // Combine basic user data with additional data
        const userData = {
            id: userDataResponse.data.id,
            username: userDataResponse.data.username,
            media_count: additionalDataResponse.data.media_count,
            followers_count: additionalDataResponse.data.followers_count || 0, // Handle undefined values
            follows_count: additionalDataResponse.data.follows_count || 0 // Handle undefined values
        };

        const user=await getInstagramData(userData.username)

        res.status(200).json({
            user,
            userData
        });
    } catch (error) {
        console.error('Error:', error.response.data);
        res.status(error.response.status || 500).json({ error: 'Internal Server Error' });
    }
});


module.exports  = router;
