import React, { useState, useEffect } from 'react';

const YouTubeProfile = () => {
    const [profileData, setProfileData] = useState(null);

    useEffect(() => {
        // Fetch data from the provided URL
        fetch('http://localhost:4000/youtubeData/profile')
            .then(response => response.json())
            .then(data => {
                // Set the fetched data in state
                setProfileData(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []); // Empty dependency array ensures the effect runs only once after the initial render

    return (
        <div>
            {profileData ? (
                <>
                    <h1>{profileData.channelTitle}</h1>
                    <p>Views: {profileData.channelStatistics.viewCount}</p>
                    <p>Subscribers: {profileData.channelStatistics.subscriberCount}</p>
                    <p>Videos: {profileData.channelStatistics.videoCount}</p>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default YouTubeProfile;
