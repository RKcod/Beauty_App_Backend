const ServiceCategoryRepository = require("../../infrastructure/repositories/ServiceCategoryRepository");

module.exports = class DeleteServiceCategoryUseCse {
  static async getServiceCategoryById(categoryId) {
    if (!categoryId) {
      throw new Error("This service category id does not exist");
    }
    return await ServiceCategoryRepository.deleteById(categoryId);
  }
};
