
const CategoryAssignementRepository = require("../../../infrastructure/repositories/ServiceCategoryAssignementsRepository");

module.exports = class GetAllCategoryAssignementUseCase {
  // 🔹 Créer une catégorie
  static async GetAllCategoryAssignement(servicePaginateFilter,
    page = 1,
    perPage = 15) {
        return await CategoryAssignementRepository.getAll(
            servicePaginateFilter,
            (page = 1),
            (perPage = 15)
          );
    }
   
};
