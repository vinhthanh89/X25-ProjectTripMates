
import {Router} from 'express'


import { editUser, getUserById, login, signup } from '../controller/user.controller.js'
import { authorization } from '../middleware/authorization.js'

const router = Router()

router.post('/signup' , signup)
router.post('/login' , login)
router.get('/:userId' , getUserById)
router.put('/edit/:userId' , authorization , editUser)

export default router