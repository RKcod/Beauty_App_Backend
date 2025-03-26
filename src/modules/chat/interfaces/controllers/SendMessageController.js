const SendMessageUseCase = require("../../../chat/core/usecases/SendMessageUseCase");

module.exports = class SendMessageController {
  static async handle(req, res) {
    try {
      const { conversation_id, content, attachments, sender_id } = req.body;

      const message = await SendMessageUseCase.sendMessage({
        conversation_id,
        sender_id,
        content,
        attachments,
      });

      return res.status(201).json({ message: "Message sent", data: message });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
};
