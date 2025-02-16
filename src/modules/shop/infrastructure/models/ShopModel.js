const BaseModel = require('../../../../shared/BaseModel');

class ShopModel extends BaseModel {
  static get tableName() {
    return "shops"; 
  }

  static get relationMappings() {
    const UserModel = require('../../../user/infrastructure/models/UserModel')
    return {
      users: this.hasMany(UserModel, "shops.id", "users.shop_id"),
    };
  }
}

module.exports = ShopModel;
