const CategoryAssignementRepository = require("../../../infrastructure/repositories/ServiceCategoryAssignementsRepository");

module.exports = class FindCategoryAssignementByUseCase {
  // 🔹 Créer une catégorie
  static async findCategoryAssignement(id) {
    if (!id) {
      throw new Error("This service category id does not exist");
    }
    return await CategoryAssignementRepository.findById(id);
  }
};
