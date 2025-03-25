const CreateConversationUseCase = require("../../../chat/core/usecases/CreateConversationUseCase");

module.exports = class CreateConversationController {
  static async handle(req, res) {
    try {
      const { userId, shopId } = req.body;

      const conversation = await CreateConversationUseCase.createConversation(userId, shopId);

      return res.status(201).json({ message: "Conversation created", data: conversation });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
};
