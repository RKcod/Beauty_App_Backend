const CategoryAssignementRepository = require("../../infrastructure/repositories/ServiceCategoryAssignementsRepository");

module.exports = class FindCategoryAssignementUseCase {
  // 🔹 Créer une catégorie
  static async createCategoryAssignement(dadaId) {
    if (!dadaId) {
      throw new Error("This service category id does not exist");
    }
    return await CategoryAssignementRepository.findById(dadaId);
  }
};
