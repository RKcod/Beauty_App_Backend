const GetUserConversationsUseCase = require("../../../chat/core/usecases/GetUserConversationsUseCase");
const GetConversationsResource = require("../../interfaces/resources/getConversationsResource");
module.exports = class GetUserConversationsController {
  static async handle(req, res) {
    try {
      const {userId} = req.params;

      const conversations = await GetUserConversationsUseCase.getUserConversations(userId);

      const formattedConversations = await GetConversationsResource.collection(conversations)

      return res.status(200).json({ data: formattedConversations });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
};
