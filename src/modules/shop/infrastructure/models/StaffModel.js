const BaseModel = require("../../../../shared/BaseModel");
const shopModel = require("./ShopModel"); // Assure-toi de bien importer ShopModel
const userModel = require("../../../user/infrastructure/models/UserModel");

class StaffModel extends BaseModel {
  static get tableName() {
    return "staffs";
  }
  static get relationMappings() {
    return {
      user: this.belongsTo(userModel, "staffs.user_id", "users.id"),
      shop: this.belongsTo(shopModel, "staffs.shop_id", "shops.id"),
    };
  }
}
module.exports = StaffModel;
