const { response } = require("express");
const social = require("../social");


const getUserDetails=async(req,res)=>{
    
    try {
        const user = await social.getUserDetails();
        if (!user) return res.status(400).json({ message: "User not found" });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const historyData=async(req,res)=>{
        
        try {
            const user = await social.history();
            if (!user) return res.status(400).json({ message: "User not found" });
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
}


const getUserInfoLinkedin = async (req, res) => {
    try {
        const user = await fetch('https://api.linkedin.com/v2/userinfo', {
            headers: {
                'Authorization': 'Bearer ' + req.body.token
            }
        })
            .then(async(response) => {
                const userData = await response.json();
                console.log(userData); // Log the user data to the console
                return userData;
            })
            .catch((err) => console.log(err));

        if (!user) return res.status(400).json({ message: "User not found" });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}



module.exports={
    getUserDetails,
    historyData,
    getUserInfoLinkedin
}
