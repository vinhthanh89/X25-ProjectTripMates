
import {Router} from 'express'
// import { authentication } from '../middleware/authentication.js'
import { createTopic, deleteTopic, editTopic, getTopicById, getTopicByUserCreated, getTopics, uploadTopicThumbnail } from '../controller/topic.controller.js'
import upload from '../middleware/upload.js'


const router = Router()

router.post('/create-topic' , createTopic)
router.get('/get-topics' , getTopics)
router.get('/topic-detail/:topicId' , getTopicById)
router.get('/topic-by-user-created/:userId' , getTopicByUserCreated)
router.delete('/delete-topic/:topicId' , deleteTopic)
router.put('/edit-topic/:topicId' , editTopic)
router.put('/upload-thumbnail/:topicId' , upload.single('thumbnail') , uploadTopicThumbnail)

export default router