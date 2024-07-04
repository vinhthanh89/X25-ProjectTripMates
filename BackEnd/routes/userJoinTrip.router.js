
import {Router} from 'express'

import {addUserJoinTrip, userAcceptJoinTrip, userDeclineJoinTrip} from '../controller/userJoinTrip.controller.js'


const router = Router()

router.put('/add-userJoinTrip/:topicId' , addUserJoinTrip)
router.put('/user-accept/:topicId' , userAcceptJoinTrip)
router.put('/user-decline/:topicId' , userDeclineJoinTrip)


export default router
