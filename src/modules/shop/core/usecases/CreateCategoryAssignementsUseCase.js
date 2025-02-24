const CategoryAssignementRepository = require("../../infrastructure/repositories/ServiceCategoryAssignementsRepository");

module.exports = class CreateCategoryAssignementUseCase {
  // 🔹 Créer une catégorie
  static async createCategoryAssignement(CategoryAssignementDada) {
    return await CategoryAssignementRepository.create(CategoryAssignementDada);
  }
};
