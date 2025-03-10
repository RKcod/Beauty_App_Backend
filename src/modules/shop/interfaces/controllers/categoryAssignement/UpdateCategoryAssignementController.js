const GetCategoryAssignementResource = require("../../resources/GetCategoryAssignementResource");
const UpdateCategoryAssignementUseCase = require("../../../core/usecases/categoryAssignements/UpdateCategoryAssignementsUseCase");
module.exports = class UpdateRoleController {
  static async update(req, res) {
    try {
      const { id } = req.params;
      // console.log(req.body, id);
      const updatedCategoryAssignement =
        await UpdateCategoryAssignementUseCase.updateCategoryAssignement(
          id,
          req.body
        );

      const CategoryAssignement = updatedCategoryAssignement[0];

      return res.status(201).json({
        message: " Category Assignement updated successfully.",
        data: GetCategoryAssignementResource.toResource(CategoryAssignement),
      });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
};
