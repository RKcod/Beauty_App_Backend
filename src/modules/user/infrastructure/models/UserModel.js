const BaseModel = require('../../../../shared/BaseModel')
const ShopModel = require("../../../shop/infrastructure/models/ShopModel"); 
const MessageModel = require("../../../chat/infrastructure/models/MessageModel")

class UserModel extends BaseModel {
  static get tableName() {
    return "users";
  }

  static get relationMappings() {
    return { 
      shop:this.belongsTo(ShopModel,"users.shop_id","shops.id"),
      messages: this.hasMany(MessageModel, "users.id", "messages.sender_id")
    };
  }
}

module.exports = UserModel;
