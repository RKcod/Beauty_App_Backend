const deleteConversationUseCase = require("../../core/usecases/DeleteConversationUseCase");

module.exports = class DeleteConversationController {
  static async handle(req, res) {
    try {
      const { conversationId } = req.params;
      await deleteConversationUseCase.deleteConversation(conversationId);

      return res
        .status(200)
        .json({ message: "This conversation deleted successfully" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
};
 