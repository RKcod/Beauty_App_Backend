const ServiceCategoryRepository = require("../../infrastructure/repositories/ServiceCategoryRepository");

module.exports = class ServiceCategoryUseCase {
  // 🔹 Créer une catégorie
  static async createCategory(serviceCategoryDada) {
    
    return await ServiceCategoryRepository.create(serviceCategoryDada);
  }
};
