const db = require("../../../../../knexInstance");
const paginationProvider = require("../../../../providers/PaginationProvider");
const ServiceCategoryModel = require("../../../shop/infrastructure/models/ServiceCategoryModel");

class ServiceCategoryRepository {
  static async create(data) {
    return db(ServiceCategoryModel.getTableName()).insert(data).returning("*");
  }
  static async getAll(serviceCategoryPaginateFilter, page, perPage) {
    let query = ServiceCategoryModel.query().select("*");

    query = serviceCategoryPaginateFilter.applyFilters(query);

    return paginationProvider.paginate(query, page, perPage);
  }
  static async findById(dataId) {
    return db(ServiceCategoryModel.getTableName())
      .where({ id: dataId })
      .first();
  }
  static async deleteById(dataId) {
    return db(ServiceCategoryModel.getTableName()).where({ id: dataId }).del();
  }
}
module.exports = ServiceCategoryRepository;
