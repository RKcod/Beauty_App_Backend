const ServiceCategoryRepository = require("../../../infrastructure/repositories/ServiceCategoryRepository");

module.exports = class GetServiceCategoryUseCse {
  static async getServiceCategory(
    servicePaginateFilter,
    page = 1,
    perPage = 15
  ) {
    return await ServiceCategoryRepository.getAll(
      servicePaginateFilter,
      (page = 1),
      (perPage = 15)
    );
  }
};
