const BaseModel = require("../../../../shared/BaseModel");

class ServiceModel extends BaseModel {
  static get tableName() {
    return "services";
  }

  static get relationMappings() {
    const ShopModel = require("./ShopModel");
    return {
      shops: this.hasMany(ShopModel, "services.shop_id", "shops.id"),
    };
  }
}
module.exports = ServiceModel;
