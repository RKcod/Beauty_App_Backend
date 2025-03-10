const CategoryAssignementRepository = require("../../../infrastructure/repositories/ServiceCategoryAssignementsRepository");

module.exports = class FindCategoryAssignementUseCase {
  // 🔹 Créer une catégorie
  static async createCategoryAssignement(id) {
    if (!id) {
      throw new Error("This service category id does not exist");
    }
    return await CategoryAssignementRepository.findById(id);
  }
};
