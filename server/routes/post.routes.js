
const {createPost,analyticsData}=require('../controllers/post.controllers')

const router=require('express').Router()

router.post('/create',createPost)
router.get('/analytics',analyticsData)

module.exports=router
