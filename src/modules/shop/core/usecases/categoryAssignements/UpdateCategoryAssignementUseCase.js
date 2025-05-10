const CategoryAssignementRepository = require("../../../infrastructure/repositories/ServiceCategoryAssignementsRepository");

module.exports = class UpdateCategoryAssignementUseCase {
  static async updateCategoryAssignement(id, data) {
    const CategoryAssignement = await CategoryAssignementRepository.findById(id);
    if (!CategoryAssignement) {
      throw new Error("This category assign id does not exist");
    }
    const updatedCategoryAssignement =
      await CategoryAssignementRepository.update(id, data);
    return updatedCategoryAssignement;
  }
  static async updateServiceId(oldServiceId, categoryId, newServiceId) {
    const assignment = await CategoryAssignementRepository.findByServiceAndCategory(oldServiceId, categoryId);

    if (!assignment) {
      throw new Error("This service is not assigned to the given category");
    }

    const updatedAssignment = await CategoryAssignementRepository.updateServiceId(
      oldServiceId, categoryId, newServiceId
    );

    return updatedAssignment;
  }
};
