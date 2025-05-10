const CategoryAssignementRepository = require("../../../infrastructure/repositories/ServiceCategoryAssignementsRepository");
const CategoryRepository = require("../../../infrastructure/repositories/ServiceCategoryRepository");
const ServiceRepository = require("../../../infrastructure/repositories/ServiceRepository");
module.exports = class CreateCategoryAssignementUseCase {
  // 🔹 Créer une catégorie
  static async createCategoryAssignement(CategoryAssignementData) {
    //const { category_id, service_id } = CategoryAssignementData[0];
    console.log('ff', CategoryAssignementData);
    // Vérifier si la catégorie existe
    const categoryExists = await CategoryRepository.findById(CategoryAssignementData.category_id);
    if (!categoryExists) {
      throw new Error(`Category with id ${CategoryAssignementData.category_id} does not exist`);
    }

    // Vérifier si le service existe
    const serviceExists = await ServiceRepository.findById(CategoryAssignementData.service_id);
    if (!serviceExists) {
      throw new Error(`Service with id ${CategoryAssignementData.service_id} does not exist`);
    }

    return await CategoryAssignementRepository.create(CategoryAssignementData);
  }
};
