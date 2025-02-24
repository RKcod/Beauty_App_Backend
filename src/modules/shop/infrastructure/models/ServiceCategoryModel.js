const BaseModel = require("../../../../shared/BaseModel");

class ServiceCategoryModel extends BaseModel {
  static get tableName() {
    return "service_categories";
  }
}
module.exports = ServiceCategoryModel;
