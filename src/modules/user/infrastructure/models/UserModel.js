const BaseModel = require("../../../../shared/BaseModel");
const ShopModel = require("../../../shop/infrastructure/models/ShopModel");
// const StaffModel = require("../../../shop/infrastructure/models/StaffModel");
class UserModel extends BaseModel {
  static get tableName() {
    return "users";
  }

  static get relationMappings() {
    return {
      shop: this.belongsTo(ShopModel, "users.shop_id", "shops.id"),
      // staff: this.belongsTo(StaffModel, "staffs.user_id", "users.id"),
    };
  }
}

module.exports = UserModel;
