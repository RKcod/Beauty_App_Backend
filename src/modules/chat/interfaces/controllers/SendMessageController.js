const SendMessageUseCase = require("../../../chat/core/usecases/SendMessageUseCase");

module.exports = class SendMessageController {
  static async handle(req, res) {
    try {
      const { conversationId, content, attachments } = req.body;
      const senderId = req.user.id;

      const message = await SendMessageUseCase.sendMessage({
        conversationId,
        senderId,
        content,
        attachments,
      });

      return res.status(201).json({ message: "Message sent", data: message });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
};
