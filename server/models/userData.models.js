
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const youtubeProfileSchema = new mongoose.Schema({
    channelTitle: String,
    channelDescription: String,
    channelStatistics: {
      viewCount: String,
      subscriberCount: String,
      hiddenSubscriberCount: Boolean,
      videoCount: String,
    },
    videos: [Object], 
  });


  const YoutubeProfile = mongoose.model('YoutubeProfile', youtubeProfileSchema);

    module.exports = {YoutubeProfile};