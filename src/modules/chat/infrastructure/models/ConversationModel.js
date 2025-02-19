const BaseModel = require("../../../../shared/BaseModel");

class ConversationModel extends BaseModel {
  static get tableName() {
    return "conversations";
  }

  static get relationMappings() {
    const UserModel = require("../../../user/infrastructure/models/UserModel");
    const ShopModel = require("../../../shop/infrastructure/models/ShopModel");
    const MessageModel = require("../../../chat/infrastructure/models/MessageModel");
    return {
      user1: this.belongsTo(UserModel, "conversations.user1_id", "users.id"),
      user2: this.belongsTo(UserModel, "conversations.user2_id", "users.id"),
      shop: this.belongsTo(ShopModel, "conversations.shop_id", "shops.id"),
      messages: this.hasMany(
        MessageModel,
        "conversations.id",
        "messages.conversation_id"
      ),
      lastMessage: this.belongsTo(
        MessageModel,
        "conversations.last_message_id",
        "messages.id"
      ),
    };
  }
}

module.exports = ConversationModel;
