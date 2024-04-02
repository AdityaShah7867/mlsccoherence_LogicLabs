const express = require('express');
const request = require('request');

const router = express.Router();


// Define the RapidAPI request options for fetching user data
const userDataOptions = {
    method: 'GET',
    url: 'https://instagram243.p.rapidapi.com/userinfo/confuse__coder', // Replace 'confuse_coder' with the desired username
    headers: {
        'X-RapidAPI-Key': '5c7c9aa9famsh59c0c1ec2fda29fp15dce6jsn5870bcca0bf1',
        'X-RapidAPI-Host': 'instagram243.p.rapidapi.com'
    }
};

// Define the RapidAPI request options for fetching user posts
const userPostsOptions = {
    method: 'GET',
    url: 'https://instagram230.p.rapidapi.com/user/posts',
    qs: {
        username: 'confuse__coder' // Replace 'confuse_coder' with the desired username
    },
    headers: {
        'X-RapidAPI-Key': '03efd5a285mshe7331c9d611b7f7p143fd2jsn5b7e913e6da3',
        'X-RapidAPI-Host': 'instagram230.p.rapidapi.com'
    }
};

// Define the route to fetch Instagram user data and posts
router.get('/', (req, res) => {
    // Fetch user data
    request(userDataOptions, (error1, response1, body1) => {
        if (error1) {
            console.error('Error fetching Instagram user data:', error1);
            res.status(500).json({ error: 'Internal Server Error' });
            return; // Return to avoid executing the next request in case of error
        }

        // Parse the response body to JSON format
        const userData = JSON.parse(body1);

        // Fetch user posts
        // Fetch user posts
        request(userPostsOptions, (error2, response2, body2) => {
            if (error2) {
                console.error('Error fetching Instagram user posts:', error2);
                res.status(500).json({ error: 'Internal Server Error' });
                return; // Return to avoid executing the next steps in case of error
            }

            console.log('User posts response body:', body2); // Log the response body

            // Parse the response body to JSON format
            const userPosts = JSON.parse(body2);

            // Extract specific data from the user posts (videos)
            const extractedData = userPosts.items.map(post => {
                if (post.media_type === 2) { // Media type 2 indicates video
                    return {
                        videoLink: post.video_versions.map(version => version.url),
                        likeCount: post.like_count,
                        uploadedTime: new Date(post.taken_at * 1000) // Convert Unix timestamp to JavaScript Date object
                    };
                }
            }).filter(Boolean); // Remove any undefined values

            console.log(extractedData);

            // Combine user data and extracted data
            const instagramData = {
                userData,
                userPosts: extractedData
            };

            res.json(instagramData);
        });

    });
});


module.exports = router;