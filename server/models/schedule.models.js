const mongoose=require('mongoose')

const scheduleSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    title:{
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

const Schedule=mongoose.model('Schedule',scheduleSchema)
module.exports={Schedule}