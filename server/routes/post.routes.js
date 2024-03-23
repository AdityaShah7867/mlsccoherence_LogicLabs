
const {createPost,analyticsData}=require('../controllers/post.controllers')
const { validateToken } = require('../middleswares/user.middlewares')

const router=require('express').Router()

router.post('/create',validateToken,createPost)
router.get('/analytics',validateToken,analyticsData)

module.exports=router
