const social = require("../social");

const createPost=async(req,res)=>{
    const {postContent,platforms}=req.body
    try {
        const post = await social.post({
            post: postContent,
            platforms: platforms,
            mediaUrls: ["https://img.ayrshare.com/012/gb.jpg"],
      }).catch(console.error);
      if (!post) return res.status(
        400
        ).json({ message: "Post not created" });


        res.status(200).json(post)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}


const analyticsData=async(req,res)=>{
    try {
        const analyticsLinks = await social.analyticsLinks({

            lastDays: 3
          }).catch(console.error);

          const analyticsPost = await social.analyticsPost({
            id: "Post ID",
            platforms: ["twitter", "instagram", "facebook", "youtube", "linkedin"]
          }).catch(console.error);

          const analyticsSocial = await social.analyticsSocial({
            platforms: ["twitter", "instagram", "facebook", "youtube", "pinterest", "tiktok", "reddit", "linkedin"]
          }).catch(console.error);

        res.status(200).json({analyticsLinks,analyticsPost,analyticsSocial});

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}



module.exports={
    createPost,
    analyticsData
}