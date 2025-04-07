const getCategoryAssignementResource = require("../../resources/GetCategoryAssignementResource");
const updateCategoryAssignementUseCase = require("../../../core/usecases/categoryAssignements/UpdateCategoryAssignementUseCase");
module.exports = class UpdateCategoryAssignementController {
  static async update(req, res) {
    try {
      const { categoryId, serviceId } = req.params;
      const { newServiceId } = req.body; // ID du nouveau service

      if (!categoryId || !serviceId || !newServiceId) {
        return res.status(400).json({ message: "categoryId, serviceId et newServiceId sont requis." });
      }

      const updatedAssignment = await updateCategoryAssignementUseCase.updateServiceId(
        serviceId, categoryId, newServiceId
      );
    
      return res.status(201).json({
        message: " Category Assignement updated successfully.",
        data: updatedAssignment,
      });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
};
