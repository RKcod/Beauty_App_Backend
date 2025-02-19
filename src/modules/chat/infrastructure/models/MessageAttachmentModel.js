const BaseModel = require("../../../../shared/BaseModel");

class MessageAttachmentModel extends BaseModel {
  static get tableName() {
    return "message_attachments";
  }

  static get relationMappings() {
    const MessageModel = require("./MessageModel");
    return {
      message: this.belongsTo(MessageModel, "message_attachments.message_id", "messages.id"),
    };
  }
}

module.exports = MessageAttachmentModel;
