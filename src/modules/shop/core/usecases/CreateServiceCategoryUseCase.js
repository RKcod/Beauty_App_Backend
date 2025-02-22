const ServiceCategoryRepository = require("../../infrastructure/repositories/ServiceCategoryRepository");

module.exports = class ServiceCategoryUseCase {
  // 🔹 Créer une catégorie
  static async createCategory(dada) {
    return await ServiceCategoryRepository.create(dada);
  }
};
