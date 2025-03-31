const MessageRepository = require("../../infrastructure/repositories/MessageRepository");

module.exports = class DeleteMessageUseCase {
  static async deleteMessage(id) {
    const message = await MessageRepository.findMessage(id);
    if (!message) throw new Error("Message not found");

    return await MessageRepository.deleteById(id);
  }
};
