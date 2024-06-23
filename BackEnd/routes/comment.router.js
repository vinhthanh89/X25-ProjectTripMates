import {Router} from 'express'
import { getCommentByTopicId } from '../controller/comment.controller.js'

const router = Router()


router.get(`/get-comment-by-topicId/:topicId` , getCommentByTopicId)

export default router