const ServiceCategoryRepository = require("../../../infrastructure/repositories/ServiceCategoryRepository");
const ServiceCategory = require("../../entities/ServiceCategory");

module.exports = class ServiceCategoryUseCase {
  // 🔹 Créer une catégorie
  static async createCategory(serviceCategoryData) {
    const category = await ServiceCategoryRepository.findByName(
      serviceCategoryData.name
    );
    if (category) {
      throw new Error("this category service already exist");
    }
    const serviceCategoryFormated = new ServiceCategory(serviceCategoryData);

    return await ServiceCategoryRepository.create(serviceCategoryFormated);
  }
};
