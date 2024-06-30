import { Router } from "express";
import { getReactByTopicId, reactTopic, removeReact } from "../controller/reaction.controller.js";

const router = Router()

router.put(`/react-topic/:topicId` , reactTopic)
router.put(`/remove-react/:topicId` , removeReact)
router.get(`/get-react-by-topicId/:topicId` , getReactByTopicId)

export default router