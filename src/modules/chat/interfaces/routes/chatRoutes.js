const express = require("express");
const router = express.Router();
const CreateConversationController = require("../../interfaces/controllers/CreateConversationController");
const SendMessageController = require("../../interfaces/controllers/SendMessageController");
const GetUserConversationsController = require("../../interfaces/controllers/GetUserConversationsController");
// const GetConversationMessagesController = require("../controllers/chat/GetConversationMessagesController");
// const MarkMessagesAsReadController = require("../controllers/chat/MarkMessagesAsReadController");

router.post("/conversation", CreateConversationController.handle);
router.post("/message", SendMessageController.handle);
router.get("/conversations/:userId", GetUserConversationsController.handle);
// router.get("/messages", GetConversationMessagesController.handle);
// router.patch("/conversation/:conversationId/read", MarkMessagesAsReadController.handle);

module.exports = router;
