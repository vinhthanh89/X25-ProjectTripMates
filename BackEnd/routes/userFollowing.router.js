import {Router} from 'express'
import { checkUserIsFollow, followUser, getDataUserFollower, getDataUserFollowing, unfollowUser } from '../controller/userFollowing.controller.js'

const router = Router()

router.get('/check-user-isFollow/:userFollow' , checkUserIsFollow)
router.get('/get-users-following/:userProfileId' , getDataUserFollowing)
router.get('/get-users-follower/:userProfileId' , getDataUserFollower)
router.put('/follow-user/:userFollow' , followUser)
router.put('/unfollow-user/:userFollow' , unfollowUser)


export default router