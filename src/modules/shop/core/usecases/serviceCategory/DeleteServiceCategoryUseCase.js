const ServiceCategoryRepository = require("../../../infrastructure/repositories/ServiceCategoryRepository");

module.exports = class DeleteServiceCategoryUseCase {
  static async getServiceCategoryById(id) {
    const categoryId = await ServiceCategoryRepository.findById(id);

    if (!categoryId) {
      throw new Error(`This service category id: ${id} does not exist`);
    }
    return await ServiceCategoryRepository.deleteById(id);
  }
};
