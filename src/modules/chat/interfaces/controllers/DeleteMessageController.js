const deleteMessageUseCase = require("../../core/usecases/DeleteMessageUseCase");

module.exports = class DeleteMessageController {
  static async handle(req, res) {
    try {
      const { messageId } = req.params;
      await deleteMessageUseCase.deleteMessage(messageId);

      return res
        .status(200)
        .json({ message: "This message deleted successfully" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
};
 