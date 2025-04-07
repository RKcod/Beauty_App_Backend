const ServiceRepository = require("../../../infrastructure/repositories/ServiceRepository");
const ServiceEntitie = require("../../entities/Service");
const ShopRepository = require("../../../infrastructure/repositories/ShopRepository");

module.exports = class CreateServiceUseCase {
  static async createService(serviceData) {
    const service = await ServiceRepository.findByName(serviceData.name);
    if (service) {
      throw new Error("this service service already exist");
    }
    const shopId = await ShopRepository.findById(serviceData.shop_id);
    if (!shopId) {
      throw new Error("this shop id does exist");
    }
    const serviceFormated = new ServiceEntitie({
      ...serviceData,
    });

    // const serviceFormated = new ServiceEntitie(serviceData);

    return await ServiceRepository.create(serviceFormated);
  }
};
