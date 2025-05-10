
const CategoryAssignementRepository = require("../../../infrastructure/repositories/ServiceCategoryAssignementsRepository");

module.exports = class GetCategoryAssignementUseCase {
  // 🔹 Créer une catégorie
  static async getCategoryAssignement(servicePaginateFilter,
    page = 1,
    perPage = 15) {
        return await CategoryAssignementRepository.getAll(
            servicePaginateFilter,
            (page = 1),
            (perPage = 15)
          );
    }
   
};
