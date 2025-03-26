const express = require("express");
const router = express.Router();
const authMiddleware = require("../../../user/interfaces/middlewares/authMiddleware");
const CreateConversationController = require("../../interfaces/controllers/CreateConversationController");
const SendMessageController = require("../../interfaces/controllers/SendMessageController");
const GetUserConversationsController = require("../../interfaces/controllers/GetUserConversationsController");
const GetConversationMessagesController = require("../../interfaces/controllers/GetConversationMessagesController");
// const MarkMessagesAsReadController = require("../controllers/chat/MarkMessagesAsReadController");

router.post("/conversation", authMiddleware, CreateConversationController.handle);
router.post("/message", authMiddleware, SendMessageController.handle);
router.get("/conversations/:userId", authMiddleware, GetUserConversationsController.handle);
router.get("/conversation/messages", GetConversationMessagesController.handle);
// router.patch("/conversation/:conversationId/read", MarkMessagesAsReadController.handle);

module.exports = router;
