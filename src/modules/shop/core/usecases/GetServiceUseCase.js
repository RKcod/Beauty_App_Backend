const ServiceRepository = require("../../infrastructure/repositories/ServiceRepository");

module.exports = class GetServiceByUseCase {
  static async getServices(servicePaginateFilter, page = 1, perPage = 15) {
    return await ServiceRepository.getAll(
      servicePaginateFilter,
      (page = 1),
      (perPage = 15)
    );
  }
};
