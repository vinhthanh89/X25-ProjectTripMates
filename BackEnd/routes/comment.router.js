import {Router} from 'express'
import { addComment, getCommentByTopicId } from '../controller/comment.controller.js'

const router = Router()


router.get(`/get-comment-by-topicId/:topicId` , getCommentByTopicId)
router.put(`/add-comment/:topicId` , addComment)

export default router