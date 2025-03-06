const MessageRepository = require("../../infrastructure/repositories/MessageRepository");
const ConversationRepository = require("../../infrastructure/repositories/ConversationRepository");
const WebSocketService = require("../../../../shared/WebSocketService");

module.exports = class SendMessageUseCase {
  static async sendMessage(messageData) {
    const conversation = await ConversationRepository.getConversationById(messageData.conversationId);
    if (!conversation) {
      throw new Error("Conversation not found");
    }

    const message = await MessageRepository.createMessage(messageData);

    // ⚡ Émettre un événement WebSocket aux participants de la conversation
    WebSocketService.emitToConversation(messageData.conversationId, "newMessage", message);

    return message;
  }
};
