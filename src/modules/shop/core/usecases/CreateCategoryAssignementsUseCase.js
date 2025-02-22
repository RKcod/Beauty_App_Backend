const CategoryAssignementRepository = require("../../infrastructure/repositories/ServiceCategoryAssignementsRepository");

module.exports = class CreateCategoryAssignementUseCase {
  // 🔹 Créer une catégorie
  static async createCategoryAssignement(dada) {
    return await CategoryAssignementRepository.create(dada);
  }
};
