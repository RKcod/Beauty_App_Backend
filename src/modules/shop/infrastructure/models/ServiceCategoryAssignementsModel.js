const BaseModel = require("../../../../shared/BaseModel");

class ServiceCategoryAssignementsModel extends BaseModel {
  static get tableName() {
    return "service_category_assignements";
  }

  static get relationMappings() {
    const ServiceModel = require("./ServiceModel");
    const ServiceCategoryModel = require("./ServiceCategoryModel");

    return {
      service: this.belongsTo(
        ServiceModel,
        "service_category_assignements.service_id",
        "services.id"
      ),
      category: this.belongsTo(
        ServiceCategoryModel,
        "service_category_assignements.category_id",
        "service_categories.id"
      ),
    };
  }
}

module.exports = ServiceCategoryAssignementsModel;
