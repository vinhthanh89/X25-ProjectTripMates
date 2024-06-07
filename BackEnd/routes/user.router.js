
import {Router} from 'express'


import { changeUserPassword, editUser, getUserById, login, signup, uploadUserAvatar } from '../controller/user.controller.js'
import { authorization } from '../middleware/authorization.js'
import { authentication } from '../middleware/authentication.js'
import upload from '../middleware/upload.js'

const router = Router()

router.post('/signup' , signup)
router.post('/login' , login)
router.get('/:userId', getUserById);
router.put('/upload-avatar/:userId' , authentication , upload.single('avatar') , uploadUserAvatar)
router.put('/edit/:userId' , authentication , authorization , editUser)
router.put('/changePassword/:userId' , authentication , authorization , changeUserPassword)



export default router