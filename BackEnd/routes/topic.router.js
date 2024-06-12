
import {Router} from 'express'
// import { authentication } from '../middleware/authentication.js'
import { createTopic, getTopicById, getTopicByUserCreated, getTopics } from '../controller/topic.controller.js'


const router = Router()

router.post('/create-topic' , createTopic)
router.get('/get-topics' , getTopics)
router.get('/topic-detail/:topicId' , getTopicById)
router.get('/topic-by-user-created/:userId' , getTopicByUserCreated)

export default router