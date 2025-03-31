const ConversationRepository = require("../../infrastructure/repositories/ConversationRepository");

module.exports = class DeleteConversationUseCase {
  static async deleteConversation(id) {
    const exists = await ConversationRepository.findConversationById(id);
    if (!exists) throw new Error("Conversation not found");

    await ConversationRepository.deleteById(id);
  }
};
