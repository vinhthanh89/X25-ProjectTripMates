import {Router} from 'express'
import { bookmarkTopic, checkBookmarkTopic, getBookmarkTopic, unBookmarkTopic } from '../controller/bookmark.controller.js'

const router = Router()

router.put('/add-bookmark' , bookmarkTopic)
router.put('/remove-bookmark' , unBookmarkTopic)
router.get('/check-bookmark/:topicId' , checkBookmarkTopic)
router.get('/get-topic-bookmark/:userId' , getBookmarkTopic)

export default router