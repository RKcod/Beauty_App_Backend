const BaseModel = require("../../../../shared/BaseModel");

class ServiceCategoryModel extends BaseModel {
  static get tableName() {
    return "service_categories";
  }


  static get relationMappings() {
    const ServiceModel = require("./ServiceModel");

    return {
      services: {
        relation: BaseModel.ManyToManyRelation,
        modelClass: ServiceModel,
        join: {
          from: "service_categories.id",
          through: {
            from: "service_category_assignements.category_id",
            to: "service_category_assignements.service_id",
          },
          to: "services.id",
        },
      },
    };
  }
}
module.exports = ServiceCategoryModel;
