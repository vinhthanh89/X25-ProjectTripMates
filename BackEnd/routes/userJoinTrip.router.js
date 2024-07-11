
import {Router} from 'express'

import {addUserJoinTrip, getUserJoinTripStatus, userAcceptJoinTrip, userDeclineJoinTrip} from '../controller/userJoinTrip.controller.js'


const router = Router()

router.put('/add-userJoinTrip/:topicId' , addUserJoinTrip)
router.put('/user-accept/:topicId' , userAcceptJoinTrip)
router.put('/user-decline/:topicId' , userDeclineJoinTrip)
router.get('/get-user-status/:topicId' , getUserJoinTripStatus)


export default router
