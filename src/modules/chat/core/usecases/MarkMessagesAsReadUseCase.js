const MessageRepository = require("../../infrastructure/repositories/MessageRepository");
const WebSocketService = require("../../../../shared/WebSocketService");

module.exports = class MarkMessagesAsReadUseCase {
  static async markMessagesAsRead(conversationId, readerId) {
    const updatedMessages = await MessageRepository.markMessagesAsRead(conversationId, readerId);

    // Récupérer l'expéditeur du dernier message
    const lastMessage = updatedMessages[updatedMessages.length - 1];
    if (lastMessage) {
      WebSocketService.emitToUser(lastMessage.sender_id, "messagesRead", {
        conversationId,
        readerId,
      });
    }

    return updatedMessages;
  }
};
