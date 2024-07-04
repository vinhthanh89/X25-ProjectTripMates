import {Router} from 'express'
import { addInviteNotification, addNotification, getNotificationByUserId, updateIsReadNotification } from '../controller/notification.controller.js'

const router = Router()

router.get('/get-notification' , getNotificationByUserId)
router.put('/add-notification/:topicId' , addNotification)
router.put('/add-inviteNotification/:topicId' , addInviteNotification)
router.put('/update-isRead' , updateIsReadNotification)

export default router