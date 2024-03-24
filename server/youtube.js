const axios = require('axios');

// Function to fetch trending videos from YouTube
const fetchTrendingVideos = async () => {
    const apiKey = 'AIzaSyAUqLy-ES4rJY-MsTeF_PFyAdXjk1pU498';
    const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=50&key=${apiKey}`;

    try {
        const response = await axios.get(apiUrl);
        const videos = response.data.items;

        // Extract hashtags from video titles, descriptions, or tags
        const hashtags = extractHashtagsFromVideos(videos);
        
        // Process and display trending hashtags
        console.log('Trending Hashtags:', hashtags);
    } catch (error) {
        console.error('Error fetching trending videos:', error);
    }
};

// Function to extract hashtags from videos
const extractHashtagsFromVideos = (videos) => {
    let hashtags = [];

    videos.forEach(video => {
        const title = video.snippet.title;
        const description = video.snippet.description;
        const tags = video.snippet.tags || [];

        // Extract hashtags from title
        const titleHashtags = extractHashtagsFromString(title);
        hashtags.push(...titleHashtags);

        // Extract hashtags from description
        const descriptionHashtags = extractHashtagsFromString(description);
        hashtags.push(...descriptionHashtags);

        // Extract hashtags from tags
        hashtags.push(...tags.filter(tag => tag.startsWith('#')));
    });

    return hashtags;
};

// Function to extract hashtags from a string
const extractHashtagsFromString = (text) => {
    const hashtagRegex = /#[^\s#]+/g;
    return text.match(hashtagRegex) || [];
};

// Fetch trending videos and extract hashtags
fetchTrendingVideos();