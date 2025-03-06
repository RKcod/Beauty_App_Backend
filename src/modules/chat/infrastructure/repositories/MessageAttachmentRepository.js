const MessageAttachmentModel = require("../models/MessageAttachmentModel");

class MessageAttachmentRepository {
  /**
   * Enregistrer un fichier joint.
   */
  static async addAttachment(messageId, filePath) {
    return MessageAttachmentModel.query().insertAndFetch({
      message_id: messageId,
      file_path: filePath,
      created_at: new Date(),
      updated_at: new Date(),
    });
  }

  /**
   * Récupérer les fichiers joints d'un message.
   */
  static async getAttachmentsByMessageId(messageId) {
    return MessageAttachmentModel.query().where("message_id", messageId);
  }
}

module.exports = MessageAttachmentRepository;
