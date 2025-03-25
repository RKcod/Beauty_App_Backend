const ServiceCategoryRepository = require("../../../infrastructure/repositories/ServiceCategoryRepository");

module.exports = class DeleteServiceCategoryUseCase {
  static async deleteServiceCategory(id) {
    const categoryId = await ServiceCategoryRepository.findById(id);

    if (!categoryId) {
      throw new Error("This service category id does not exist");
    }
    return await ServiceCategoryRepository.deleteById(id);
  }
};
