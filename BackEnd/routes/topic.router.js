
import { Router } from 'express'
// import { authentication } from '../middleware/authentication.js'
import { addPostToTopic, createTopic, deleteTopic, editTopic, fetchDataTopics, getTopicById, getTopicByUserCreated, getTopics, uploadTopicThumbnail } from '../controller/topic.controller.js'
import upload from '../middleware/upload.js'


const router = Router()

router.post('/create-topic' , createTopic)
router.get('/get-topics' , getTopics)
router.get('/fetch-topics' , fetchDataTopics)
router.get('/topic-detail/:topicId' , getTopicById)
router.get('/topic-by-user-created/:userId' , getTopicByUserCreated)
router.delete('/delete-topic/:topicId' , deleteTopic)
router.put('/edit-topic/:topicId' , editTopic)
router.put('/upload-thumbnail/:topicId' , upload.single('thumbnail') , uploadTopicThumbnail)
router.put('/add-post/:topicId' , addPostToTopic)

export default router