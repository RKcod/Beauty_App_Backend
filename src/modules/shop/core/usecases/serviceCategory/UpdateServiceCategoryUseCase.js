const ServiceCategoryRepository = require("../../../infrastructure/repositories/ServiceCategoryRepository");

module.exports = class UpdateServiceCategoryUseCase {
  static async updateServiceCategory(id, data) {
    const serviceCategory = await ServiceCategoryRepository.findById(id);
    if (!serviceCategory) {
      throw new Error("This service category id does not exist");
    }
    const updatedServiceCategory = await ServiceCategoryRepository.updateById(id, data);
    return updatedServiceCategory;
  }    
}