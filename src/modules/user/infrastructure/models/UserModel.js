const BaseModel = require('../../../../shared/BaseModel')
const ShopModel = require("../../../shop/infrastructure/models/ShopModel"); 

class UserModel extends BaseModel {
  static get tableName() {
    return "users";
  }

  static get relationMappings() {
    return { 
      shop:this.belongsTo(ShopModel,"users.shop_id","shops.id"),
    };
  }
  
}

module.exports = UserModel;
