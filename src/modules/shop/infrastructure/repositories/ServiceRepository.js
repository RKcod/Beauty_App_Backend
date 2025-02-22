const ServiceModel = require("../models/ServiceModel");
const db = require("../../../../../knexInstance");
const paginationProvider = require("../../../../providers/PaginationProvider");

class ServiceRepository {
  static async create(serviceData) {
    return db(ServiceModel.getTableName()).insert(serviceData).returning("*");
  }

  static async getAll(servicePaginateFilter, page, perPage) {
    let query = ServiceModel.query().select("*").withGraphFetched("shops");

    query = servicePaginateFilter.applyFilters(query);

    return paginationProvider.paginate(query, page, perPage);
  }
  static async findById(serviceId) {
    return db(ServiceModel.getTableName()).where({ id: serviceId }).first();
  }
  static async findByOwnerId(serviceId) {
    return db(ServiceModel.getTableName())
      .where({ shop_id: serviceId })
      .first();
  }
  static async deleteById(serviceId) {
    return db(ShopModel.getTableName()).where({ id: serviceId }).del();
  }
}
module.exports = ServiceRepository;
