const CategoryAssignementRepository = require("../../infrastructure/repositories/ServiceCategoryAssignementsRepository");

module.exports = class DeleteCategoryAssignementUseCase {
  // 🔹 Créer une catégorie
  static async deleteCategoryAssignement(dadaId) {
    if (!dadaId) {
        throw new Error("This service category id does not exist");
      }
      return await CategoryAssignementRepository.deleteById(categoryId);
    }
}

