const ServiceCategoryRepository = require("../../../infrastructure/repositories/ServiceCategoryRepository");
const ServiceCategory = require("../../entities/ServiceCategories");

module.exports = class ServiceCategoryUseCase {

  static async createCategory(serviceCategoryData) {
    const category = await ServiceCategoryRepository.findByName(
      serviceCategoryData.name
    );
    if (category) {
      throw new Error("This service category already exist");
    }
    const serviceCategoryFormated = new ServiceCategory(serviceCategoryData);

    return await ServiceCategoryRepository.create(serviceCategoryFormated);
  }
};
