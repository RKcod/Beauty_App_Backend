const BaseModel = require('../../../../shared/BaseModel');
const ConversationModel = require('../../../chat/infrastructure/models/ConversationModel');
class ShopModel extends BaseModel {
  static get tableName() {
    return "shops"; 
  }

  static get relationMappings() {
    const UserModel = require('../../../user/infrastructure/models/UserModel')
    return {
      users: this.hasMany(UserModel, "shops.id", "users.shop_id"),
      conversations: this.hasMany(ConversationModel, "shops.id", "conversations.shop_id")
    };
  }
}

module.exports = ShopModel;
