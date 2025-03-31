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

router.post("/chat/conversation", authMiddleware, CreateConversationController.handle);
router.post("/chat/message", authMiddleware, SendMessageController.handle);
router.get("/chat/conversations/:userId", authMiddleware, GetUserConversationsController.handle);
router.get("/chat/conversation/messages", authMiddleware, GetConversationMessagesController.handle);

router.put("/chat/message/:messageId", authMiddleware, UpdateMessageController.handle)
router.patch("/chat/conversation/:conversationId/read", authMiddleware, MarkMessagesAsReadController.handle);
router.delete("/chat/conversation/:conversationId", authMiddleware, DeleteConversationController.handle);
router.delete("/chat/message/:messageId", authMiddleware, DeleteMessageController.handle);

module.exports = router;
