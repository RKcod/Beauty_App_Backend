const GetConversationMessagesUseCase = require("../../../chat/core/usecases/GetMessagesByConversationUseCase");
const ConversationPaginateFilter = require("../../application/filters/ConversationPaginateFilter");

module.exports = class GetConversationMessagesController {
  static async handle(req, res) {
    try {
      const { conversationId, page } = req.query;

      const filter = new ConversationPaginateFilter({ conversation_id: conversationId });

      const messages = await GetConversationMessagesUseCase.getMessages(filter, page || 1, 15);

      return res.status(200).json(messages);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
};
