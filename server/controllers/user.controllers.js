const { response } = require("express");
const social = require("../social");
const { User } = require("../models/user.models");
const jwt=require('jsonwebtoken')


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


const registerUSer=async (req,res)=>{
    const { name, email, password } = req.body;
    try {

        const user = await User.create({
            name: name,
            email: email,
            password: password

        })
        
        if (!user) return res.status(400).json({ message: "User not found" });
        res.status(200).json({
            user:user,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const longinUser=async(req,res)=>{
    const { email, password } = req.body;
    try {
        const user
            = await User.findOne({
                email: email,
                password: password
            })
        if (!user) return res.status(400).json({ message: "User not found" });
        const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'1h'})

        res.status(200).json({
            user:user,
            token:token
        
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports={
    getUserDetails,
    historyData,
    getUserInfoLinkedin,
    registerUSer,
    longinUser
}
