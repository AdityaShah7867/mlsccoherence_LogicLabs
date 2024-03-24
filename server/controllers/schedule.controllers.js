const {Schedule}=require('../models/schedule.models')


const createSchedule=async(req,res)=>{
    const {title,description,date,time,platforms}=req.body
    try{
        const schedule=await Schedule.create({
            user:'65ff1adcf7107e4b06c490c7',
            title,
            date,
            time,
            platforms:['linkedin']
        })
        res.status(200).json({
            message:'Schedule created successfully',
            schedule

        })
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}


const getAllSchedules=async (
    req,
    res
)=>{
    try{
        const schedules=await Schedule.find({})
        res.status(200).json(schedules)
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}

const getScheduleById=async(req,res)=>{
    const {id}=req.params
    try{
        const schedule=await
        Schedule.findById(id)
        res.status(200).json(schedule)

    }
    catch(error){
        res.status(500).json({message:error.message})
    }

}

module.exports={
    createSchedule,
    getAllSchedules,
    getScheduleById
}
