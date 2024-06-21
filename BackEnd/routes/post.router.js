import {Router} from 'express'
import upload from '../middleware/upload.js'
import { createPost, getPostById, getPostByTopicId } from '../controller/post.controller.js'

const router = Router()

router.post('/create-post' , upload.any() , createPost)
router.get('/get-post-by-id/:postId' , getPostById)
router.get('/get-post-by-topicId/:topicId' , getPostByTopicId)

export default router