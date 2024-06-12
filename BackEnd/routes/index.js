
import Router from 'express'

import userRouter from './user.router.js'
import topicRouter from './topic.router.js'
import locationRouter from './location.router.js'
import { authentication } from '../middleware/authentication.js'


const router = Router()

router.use('/api/user' , userRouter)
router.use('/api/topic' , authentication , topicRouter)
router.use('/api/location' , locationRouter)


export default router