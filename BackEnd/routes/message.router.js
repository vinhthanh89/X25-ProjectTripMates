// import { Router } from "express";
// import {
//   getMessages,
//   createMessage,
// } from "../controller/message.controller.js";

// const router = Router();

// router.get("/:userId1/:userId2", getMessages);
// router.post("/", createMessage);

// export default router;

import express from "express";
import {
  sendMessage,
  getConversation,
} from "../controller/message.controller.js";
import { authentication } from "../middleware/authentication.js";

const router = express.Router();

router.post("/send", authentication, sendMessage);
router.get(
  "/conversation/:userId/:otherUserId",
  authentication,
  getConversation
);

export default router;
