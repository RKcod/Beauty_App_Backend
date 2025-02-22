const ServiceRepository = require("../../infrastructure/repositories/ServiceRepository");

module.exports = class CreateServiceUseCase {
  static async createService(serviceData) {
    const { shop_id, description, name, price, duration } = serviceData;

    // const userCreated = await UserRepository.create({
    //     email: email,
    //     password: userPasswordHash,
    //     username: name,
    //     phone: phone,
    //   });
    return await ServiceRepository.create(serviceData);
  }
};
