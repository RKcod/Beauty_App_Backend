const BaseModel = require("../../../../shared/BaseModel");
const ShopModel = require("./ShopModel"); // Assure-toi de bien importer ShopModel

class StaffModel extends BaseModel {
  static get tableName() {
    return "staffs";
  }
  static get relationMappings() {
    const UserModel = require("../../../user/infrastructure/models/UserModel");
    return {
      users: this.hasMany(UserModel, "users.id", "staffs.id"),
      shops: this.hasMany(ShopModel, "shops.id", "staffs.id"),
    };
  }
}
module.exports = StaffModel;
