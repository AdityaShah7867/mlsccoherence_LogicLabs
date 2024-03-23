const {historyData,getUserInfoLinkedin,
    registerUSer,
    longinUser,
    getALLuser,
    updateUSer
}=require('../controllers/user.controllers')

const router=require('express').Router()

router.get('/history',historyData)
router.post('/userinfo',getUserInfoLinkedin)
router.post('/register',registerUSer)
router.post('/login',longinUser)
router.get('/all',getALLuser)
router.put('/update',updateUSer)


module.exports=router