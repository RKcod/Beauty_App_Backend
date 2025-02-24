const BaseModel = require("../../../../shared/BaseModel");
const ShopModel = require("./ShopModel"); // Assure-toi de bien importer ShopModel
const UserModel = require("../../../user/infrastructure/models/UserModel");

class StaffModel extends BaseModel {
  static get tableName() {
    return "staffs";
  }
  static get relationMappings() {
    return {
      users: this.belongsTo(UserModel, "staffs.user_id", "users.id"),
      shops: this.belongsTo(ShopModel, "staffs.shop_id", "shops.id"),
    };
  }
}
module.exports = StaffModel;
