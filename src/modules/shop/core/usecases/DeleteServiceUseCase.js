const ServiceRepository = require("../../infrastructure/repositories/ServiceRepository");

module.exports = class DeleteServiceUseCase {
  static async deleteService(id) {
    const shop = await ServiceRepository.findById(id);

    if (!shop) {
      throw new Error("Service not found");
    }

    return await ServiceRepository.deleteById(id);
  }
};
