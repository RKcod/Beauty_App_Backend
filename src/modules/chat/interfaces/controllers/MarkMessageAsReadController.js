const MarkMessagesAsReadUseCase = require("../../../chat/core/usecases/MarkMessagesAsReadUseCase");

module.exports = class MarkMessagesAsReadController {
  static async handle(req, res) {
    try {
      const { conversationId } = req.params;
      const userId = req.user.id;

      await MarkMessagesAsReadUseCase.markMessagesAsRead(conversationId, userId);

      return res.status(200).json({ message: "Messages marked as read" });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
};
