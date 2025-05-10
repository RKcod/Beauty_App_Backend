const BaseModel = require("../../../../shared/BaseModel");
// const StaffModel = require("./../../../shop/infrastructure/models/StaffModel");
class ShopModel extends BaseModel {
  static get tableName() {
    return "shops";
  }

  static get relationMappings() {
    const UserModel = require("../../../user/infrastructure/models/UserModel");
    return {
      users: this.hasMany(UserModel, "shops.owner_id", "users.id"),
      //  staffs: this.hasMany(StaffModel, "staffs.shop_id", "shops.id"),
    };
  }
}

module.exports = ShopModel;
