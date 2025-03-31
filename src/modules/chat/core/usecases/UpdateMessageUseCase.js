const MessageRepository = require("../../infrastructure/repositories/MessageRepository");

module.exports = class UpdateMessageUseCase {
  static async updateMessage(messageId, content) {
    const message = await MessageRepository.findMessage(messageId);
    if (!message) throw new Error("Message not found");

    return await MessageRepository.updateById(messageId, { content });
  }
};
