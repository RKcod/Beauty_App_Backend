const GetConversationMessagesUseCase = require("../../../chat/core/usecases/GetMessagesByConversationUseCase");
const ConversationPaginateFilter = require("../../../chat/application/filters/ConversationPaginateFilter");
const GetConversationMessagesResource = require("../resources/getConversationMessagesResource");

module.exports = class GetConversationMessagesController {
  static async handle(req, res) {
    try {
      const filter = new ConversationPaginateFilter(req.query);

      const messages = await GetConversationMessagesUseCase.getMessages(
        filter,
        req.query.page || 1,
        15
      );

      const formattedMessages =
        await GetConversationMessagesResource.collection(messages.data);

      return res.status(200).json({
        data: formattedMessages,
        pagination: messages.pagination,
      });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
};
