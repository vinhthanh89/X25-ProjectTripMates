
import Router from 'express'

import userRouter from './user.router.js'


const router = Router()

router.use('/api/user' , userRouter)


export default router