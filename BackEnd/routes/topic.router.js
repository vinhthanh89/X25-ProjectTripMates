
import {Router} from 'express'
// import { authentication } from '../middleware/authentication.js'
import { createTopic, getTopicById, getTopics } from '../controller/topic.controller.js'

const router = Router()

router.post('/create-topic' , createTopic)
router.get('/get-topics' , getTopics)
router.get('/:topicId' , getTopicById)

export default router