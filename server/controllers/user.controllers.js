const { response } = require("express");
const social = require("../social");
const { User } = require("../models/user.models");
const jwt=require('jsonwebtoken')
require('dotenv').config()


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


const LinkdinALlData=async()=>{
    const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://linkedin-profiles1.p.rapidapi.com/extract',
  params: {
    url: 'https://ca.linkedin.com/in/sahilchalke',
    html: '1'
  },
  headers: {
    'X-RapidAPI-Key': '03efd5a285mshe7331c9d611b7f7p143fd2jsn5b7e913e6da3',
    'X-RapidAPI-Host': 'linkedin-profiles1.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);

    return response.data;
} catch (error) {
	console.error(error);
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
                console.log(userData); 
                return userData;
            })
            .catch((err) => console.log(err));

        if (!user) return res.status(400).json({ message: "User not found" });

        const userLinkedin = await LinkdinALlData();
        res.status(200).json({
            user:user,
            userLinkedin:userLinkedin
        });
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
        const user= await User.find({
            email:email,
        })

        console.log(user)
            
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


const getALLuser=async(req,res)=>{
    try {
        const user = await User.find();
        if (!user) return res.status(400).json({ message: "User not found" });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateUSer=async(req,res)=>{
    const { location,name,email,password } = req.body;
    try {
        const user = await User.findByIdAndUpdate(
            req.user.id,
            {
                name: name,
                email: email,
                password: password,
                location: location
            }
        )

        if (!user) return res.status(400).json({ message: "User not found" });
        res.status(200).json(user);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}


module.exports={
    getUserDetails,
    historyData,
    getUserInfoLinkedin,
    registerUSer,
    longinUser,
    getALLuser,
    updateUSer
};

