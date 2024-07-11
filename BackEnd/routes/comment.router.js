import {Router} from 'express'
import { addComment, deleteComment, editComment, getCommentByTopicId } from '../controller/comment.controller.js'

const router = Router()


router.get(`/get-comment-by-topicId/:topicId` , getCommentByTopicId)
router.put(`/add-comment/:topicId` , addComment)
router.delete('/delete-comment/:topicId' , deleteComment)
router.put('/edit-comment/:topicId' , editComment)

export default router