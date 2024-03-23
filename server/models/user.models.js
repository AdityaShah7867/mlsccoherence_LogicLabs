const mongoose=require('mongoose')

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    coins:{
        type:Number,
        default:0
    },
    locationCoordinates:{
        lat:{
            type:Number,
           
        },
        long:{
            type:Number,
           
        }
    },
},{
    timestamps:true
})

const User=mongoose.model('User',UserSchema)
module.exports={User}