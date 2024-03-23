const mongoose=require('mongoose')

const postSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    platforms:[{
        type:String,
        required:true
    }]
},{
    timestamps:true
})

const Post=mongoose.model('post',postSchema)
module.exports={Post}