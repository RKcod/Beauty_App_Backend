const BaseModel = require("../../../../shared/BaseModel");

class ShopModel extends BaseModel {
  static get tableName() {
    return "shops";
  }

  static get relationMappings() {
    const UserModel = require("../../../user/infrastructure/models/UserModel");
    return {
      users: this.hasMany(UserModel, "shops.id", "users.shop_id"),
    };
  }

  // static get relationMappings() {
  //   const StaffModel = require("../../../staff/infrastructure/models/StaffModel");
  //   return {
  //     shop: this.belongsTo(StaffModel, "shops.staffs_id", "staffs.id"),
  //   };
  // }
}

module.exports = ShopModel;
