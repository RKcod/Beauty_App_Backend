const UpdateMessageUseCase = require("../../core/usecases/UpdateMessageUseCase");

module.exports = class UpdateMessageController {
  static async handle(req, res) {
    try {
      const { messageId } = req.params;
      const { content } = req.body;

      const message = await UpdateMessageUseCase.updateMessage(
        messageId,
        content
      );

      return res
        .status(200)
        .json({ message: "Message updated", data: message });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
};
