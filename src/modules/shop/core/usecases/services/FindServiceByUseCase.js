const ServiceRepository = require("../../../infrastructure/repositories/ServiceRepository");

module.exports = class FindServiceByUseCase {
  static async findService(id) {
    const service = await ServiceRepository.findById(id);
    if (!service) {
      throw new Error("This service does not exist");
    }
    return service;
  }
};
