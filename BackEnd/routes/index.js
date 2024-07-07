
import Router from 'express'

import userRouter from './user.router.js'
import topicRouter from './topic.router.js'
import locationRouter from './location.router.js'
import postRouter from './post.router.js'
import reactRouter from './reaction.router.js'
import commentRouter from './comment.router.js'
import userFollowingRouter from './userFollowing.router.js'
import notificationRouter from './notification.router.js'
import messageRouter from "./message.router.js";
import userJoinTripRouter from './userJoinTrip.router.js'
import { authentication } from '../middleware/authentication.js'


const router = Router()

router.use('/api/user' , userRouter)
router.use('/api/location' , locationRouter)
router.use('/api/topic' , authentication , topicRouter)
router.use('/api/post' , authentication , postRouter)
router.use('/api/react' , authentication , reactRouter)
router.use('/api/comment' , authentication , commentRouter)
router.use('/api/following' , authentication , userFollowingRouter)
router.use('/api/notification', authentication, notificationRouter)
router.use('/api/messages', authentication, messageRouter)
router.use('/api/userJoinTrip' , authentication , userJoinTripRouter)



export default router