const MessageAttachmentRepository = require("../../infrastructure/repositories/MessageAttachmentRepository");

module.exports = class UploadMessageAttachmentUseCase {
  static async uploadAttachment(messageId, filePath) {
    return await MessageAttachmentRepository.addAttachment(messageId, filePath);
  }
};
