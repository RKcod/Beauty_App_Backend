const ServiceCategoryRepository = require("../../../infrastructure/repositories/ServiceCategoryRepository");

module.exports = class DeleteServiceCategoryUseCse {
  static async getCategoryById(categoryId) {
    const serviceCategory = await ServiceCategoryRepository.findById(
      categoryId
    );
    if (!serviceCategory) {
      throw new Error(`This service category ${categoryId} does not exist`);
    }
    return serviceCategory;
  }
};
