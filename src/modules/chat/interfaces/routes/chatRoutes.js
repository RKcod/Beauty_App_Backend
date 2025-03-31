const express = require("express");
const router = express.Router();
const authMiddleware = require("../../../user/interfaces/middlewares/authMiddleware");
const CreateConversationController = require("../../interfaces/controllers/CreateConversationController");
const SendMessageController = require("../../interfaces/controllers/SendMessageController");
const GetUserConversationsController = require("../../interfaces/controllers/GetUserConversationsController");
const GetConversationMessagesController = require("../../interfaces/controllers/GetConversationMessagesController");
const MarkMessagesAsReadController = require("../../interfaces/controllers/MarkMessageAsReadController");
const DeleteConversationController = require("../controllers/DeleteConversationController");
const DeleteMessageController = require("../controllers/DeleteMessageController");
const UpdateMessageController = require("../controllers/UpdateMessageController");

router.post("/conversation", authMiddleware, CreateConversationController.handle);
router.post("/message", authMiddleware, SendMessageController.handle);
router.get("/conversations/:userId", authMiddleware, GetUserConversationsController.handle);
router.get("/conversation/messages", authMiddleware, GetConversationMessagesController.handle);

router.put("/message/:messageId", authMiddleware, UpdateMessageController.handle)
router.patch("/conversation/:conversationId/read", authMiddleware, MarkMessagesAsReadController.handle);
router.delete("/conversation/:conversationId", authMiddleware, DeleteConversationController.handle);
router.delete("/message/:messageId", authMiddleware, DeleteMessageController.handle);

module.exports = router;
