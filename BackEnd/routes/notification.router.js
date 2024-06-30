import {Router} from 'express'
import { addNotification, getNotificationByUserId, updateIsReadNotification } from '../controller/notification.controller.js'

const router = Router()

router.get('/get-notification' , getNotificationByUserId)
router.put('/add-notification/:topicId' , addNotification)
router.put('/update-isRead' , updateIsReadNotification)

export default router