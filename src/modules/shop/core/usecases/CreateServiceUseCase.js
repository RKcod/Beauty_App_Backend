const ServiceRepository = require("../../infrastructure/repositories/ServiceRepository");

module.exports = class CreateServiceUseCase {
  static async createService(serviceData) {
    // const { shop_id, description, name, price, duration } = serviceData;

    return await ServiceRepository.create(serviceData);
  }
};
