const CategoryAssignementRepository = require("../../../infrastructure/repositories/ServiceCategoryAssignementsRepository");

module.exports = class UpdateCategoryAssignementUseCase {
  static async updateCategoryAssignement(id, data) {
    const CategoryAssignement = await CategoryAssignementRepository.findById(
      id
    );
    if (!CategoryAssignement) {
      throw new Error("This category assign id does not exist");
    }
    const updatedCategoryAssignement =
      await CategoryAssignementRepository.updateById(id, data);
    return updatedCategoryAssignement;
  }
};
