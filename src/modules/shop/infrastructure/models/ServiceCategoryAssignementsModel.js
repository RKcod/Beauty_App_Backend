const BaseModel = require("../../../../shared/BaseModel");

class ServiceCategoryAssignementsModel extends BaseModel {
    static get tableName() {
      return "service_category_assignements";
    }
    static get relationMappings() {
      const ServiceModel = require("./ServiceModel");
      const ServiceCategoryeModel = require("./ServiceCategoryModel");

      return {
        service: this.belongsTo(ServiceModel, "services.id","service_category_assignements.service_id" ),
        category: this.belongsTo(ServiceCategoryeModel,  "service_categories.id","service_category_assignements.category_id"),

      };
    }
}
module.exports = ServiceCategoryAssignementsModel;