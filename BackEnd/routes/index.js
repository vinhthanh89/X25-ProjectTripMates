
import Router from 'express'

import userRouter from './user.router.js'
import topicRouter from './topic.router.js'
import locationRouter from './location.router.js'
import postRouter from './post.router.js'
import reactRouter from './reaction.router.js'
import commentRouter from './comment.router.js'
import { authentication } from '../middleware/authentication.js'


const router = Router()

router.use('/api/user' , userRouter)
router.use('/api/topic' , authentication , topicRouter)
router.use('/api/location' , locationRouter)
router.use('/api/post' , authentication , postRouter)
router.use('/api/react' , authentication , reactRouter)
router.use('/api/comment' , authentication , commentRouter)


export default router