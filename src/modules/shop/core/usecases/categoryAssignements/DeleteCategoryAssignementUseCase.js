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
  static async removeServiceFromCategory(serviceId, categoryId) {
    // Vérifier si l'affectation existe
    const categoryAssign = await CategoryAssignementRepository.findByServiceAndCategory(serviceId, categoryId);


    // Supprimer l'affectation
    await CategoryAssignementRepository.removeServiceFromCategory(serviceId, categoryId);

    return { message: "Service retiré de la catégorie avec succès." };
  }
};
