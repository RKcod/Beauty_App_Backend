const MessageRepository = require("../../infrastructure/repositories/MessageRepository");

module.exports = class GetMessagesByConversationUseCase {
  static async getMessages(conversationId, page = 1, perPage = 15) {
    return await MessageRepository.getMessagesByConversation(conversationId, page, perPage);
  }
};
