const BaseModel = require("../../../../shared/BaseModel");

class MessageModel extends BaseModel {
  static get tableName() {
    return "messages";
  }

  static get relationMappings() {
    const ConversationModel = require("./ConversationModel");
    const UserModel = require("../../../user/infrastructure/models/UserModel");
    const MessageAttachmentModel = require("./MessageAttachmentModel");
    return {
      conversation: this.belongsTo(
        ConversationModel,
        "messages.conversation_id",
        "conversations.id"
      ),
      sender: this.belongsTo(UserModel, "messages.sender_id", "users.id"),
      attachments: this.hasMany(
        MessageAttachmentModel,
        "messages.id",
        "message_attachments.message_id"
      ),
    };
  }
}

module.exports = MessageModel;
