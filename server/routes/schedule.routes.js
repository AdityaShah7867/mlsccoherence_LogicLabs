const {createSchedule,getAllSchedules,getScheduleById}=require('../controllers/schedule.controllers')

const router=require('express').Router()


router.post('/create',createSchedule)
router.get('/all',getAllSchedules)
router.get('/:id',getScheduleById)

module.exports=router