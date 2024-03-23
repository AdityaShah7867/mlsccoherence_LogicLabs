const {historyData,getUserInfoLinkedin}=require('../controllers/user.controllers')

const router=require('express').Router()

router.get('/history',historyData)
router.post('/userinfo',getUserInfoLinkedin)

module.exports=router