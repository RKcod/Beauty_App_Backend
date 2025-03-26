const CategoryAssignementRepository = require("../../../infrastructure/repositories/ServiceCategoryAssignementsRepository");

module.exports = class FindCategoryAssignementByUseCase {
  // 🔹 Créer une catégorie
  static async findCategoryAssignement(id) {
   const  CategoryAssignement = await CategoryAssignementRepository.findById(id);
    if (!CategoryAssignement) {
      throw new Error("This  category assign id does not exist");
    }
     return CategoryAssignement;
  }
};
