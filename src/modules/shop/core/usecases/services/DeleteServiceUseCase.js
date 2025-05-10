const ServiceRepository = require("../../../infrastructure/repositories/ServiceRepository");

module.exports = class DeleteServiceUseCase {
  static async deleteService(id) {
    const service = await ServiceRepository.findById(id);

    if (!service) {
      throw new Error("Service not found");
    }

    return await ServiceRepository.deleteById(id);
  }
};
