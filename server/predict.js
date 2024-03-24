const fs = require('fs');

const jsonData = fs.readFileSync('jsoncrack.json');
const data = JSON.parse(jsonData);

const videos = data.videos;

let totalLikes = 0;
let totalViews = 0;
videos.forEach(video => {
    totalLikes += parseInt(video.likes);
    totalViews += parseInt(video.views);
});
const meanLikes = totalLikes / videos.length;
const meanViews = totalViews / videos.length;


function linearRegression(features, target) {
    const meanFeatures = features.reduce((acc, val) => acc + val, 0) / features.length;
    const meanTarget = target.reduce((acc, val) => acc + val, 0) / target.length;

    const numerator = features.reduce((acc, feature, i) => acc + (feature - meanFeatures) * (target[i] - meanTarget), 0);
    const denominator = features.reduce((acc, feature) => acc + Math.pow(feature - meanFeatures, 2), 0);

    const slope = numerator / denominator;
    const intercept = meanTarget - slope * meanFeatures;

    return [slope, intercept];
}


const likesFeatures = videos.map(video => parseInt(video.likes));
const likesTarget = videos.map(video => parseInt(video.likes));
const [likesSlope, likesIntercept] = linearRegression(likesFeatures, likesTarget);
const upcomingVideoLikes = meanLikes;
const predictedLikes = likesSlope * upcomingVideoLikes + likesIntercept;

console.log("Predicted likes for the upcoming video:", predictedLikes);


const viewsFeatures = videos.map(video => parseInt(video.views));
const viewsTarget = videos.map(video => parseInt(video.views));
const [viewsSlope, viewsIntercept] = linearRegression(viewsFeatures, viewsTarget);
const upcomingVideoViews = meanViews;
const predictedViews = viewsSlope * upcomingVideoViews + viewsIntercept;

console.log("Predicted views for the upcoming video:", predictedViews);