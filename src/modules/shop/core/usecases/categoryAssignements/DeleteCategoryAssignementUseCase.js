const CategoryAssignementRepository = require("../../../infrastructure/repositories/ServiceCategoryAssignementsRepository");

module.exports = class DeleteCategoryAssignementUseCase {
  // 🔹 Créer une catégorie
  static async deleteCategoryAssignement(id) {
    const categoryAssignExists = await  CategoryAssignementRepository.findById(id);

    if (!categoryAssignExists) {
      throw new Error("This service category id does not exist");
    }
    return await CategoryAssignementRepository.deleteById(id);
  }
};
