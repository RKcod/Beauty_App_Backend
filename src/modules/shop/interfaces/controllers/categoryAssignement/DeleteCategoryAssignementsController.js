const DeleteCategoryAssignementUseCase = require("../../../core/usecases/categoryAssignements/DeleteCategoryAssignementsUseCase");
module.exports = class DeleteCategoryAssignementController {
  static async delete(req, res) {
    const { id } = req.params;

    try {
    await DeleteCategoryAssignementUseCase.deleteCategoryAssignement(id);

      return res
        .status(200)
        .json({ message: "service category  deleted successfully" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
};
