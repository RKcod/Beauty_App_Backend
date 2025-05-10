const getCategoryAssignementResource = require("../../resources/GetCategoryAssignementResource");
const updateCategoryAssignementUseCase = require("../../../core/usecases/categoryAssignements/UpdateCategoryAssignementUseCase");
module.exports = class UpdateCategoryAssignementController {
  static async update(req, res) {
    try {
      const { id } = req.params;
      // console.log(req.body, id);
      const updatedCategoryAssignement =
        await updateCategoryAssignementUseCase.updateCategoryAssignement(
          id,
          req.body
        );

      const CategoryAssignement = updatedCategoryAssignement;

      return res.status(201).json({
        message: " Category Assignement updated successfully.",
        data: CategoryAssignement,
      });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
};
