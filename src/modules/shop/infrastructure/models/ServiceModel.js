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

  static get relationMappings() {
    const ServiceCategoryModel = require("./ServiceCategoryModel");

    return {
      categories: {
        relation: BaseModel.ManyToManyRelation,
        modelClass: ServiceCategoryModel,
        join: {
          from: "services.id",
          through: {
            from: "service_category_assignements.service_id",
            to: "service_category_assignements.category_id",
          },
          to: "service_categories.id",
        },
      },
    };
  }
}
module.exports = ServiceModel;
