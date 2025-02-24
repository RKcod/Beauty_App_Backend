const CategoryAssignementRepository = require("../../infrastructure/repositories/ServiceCategoryAssignementsRepository");

module.exports = class DeleteCategoryAssignementUseCase {
  // 🔹 Créer une catégorie
  static async deleteCategoryAssignement(id) {
    if (!id) {
        throw new Error("This service category id does not exist");
      }
      return await CategoryAssignementRepository.deleteById(categoryId);
    }
}

