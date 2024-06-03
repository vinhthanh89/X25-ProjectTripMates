
import {Router} from 'express'


import { changeUserPassword, editUser, getUserById, login, signup } from '../controller/user.controller.js'
import { authorization } from '../middleware/authorization.js'
import { authentication } from '../middleware/authentication.js'

const router = Router()

router.post('/signup' , signup)
router.post('/login' , login)
router.get('/:userId', getUserById)
router.put('/edit/:userId' , authentication , authorization , editUser)
router.put('/changePassword/:userId' , authentication , authorization , changeUserPassword)



export default router