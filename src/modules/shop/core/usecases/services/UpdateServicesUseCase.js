const ServiceRepository = require("../../../infrastructure/repositories/ServiceRepository");
const ServiceEntitie = require("../../entities/Service");



module.exports = class UpdateServiceUseCase {
  static async updateService(id, data) {
    const service = await ServiceRepository.findById(id);
    if (!service) {
      throw new Error("This service id does not exist");
    }
    
    const serviceFormated = new ServiceEntitie(data);

    const updatedService = await ServiceRepository.update(id, serviceFormated);

    return updatedService;
  }    
}