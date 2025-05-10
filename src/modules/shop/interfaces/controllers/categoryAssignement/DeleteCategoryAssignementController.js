const deleteCategoryAssignementUseCase = require("../../../core/usecases/categoryAssignements/DeleteCategoryAssignementUseCase");
module.exports = class FindCategoryAssignementByIdController {
  static async delete(req, res) {
    const { id } = req.params;

    try {
    await deleteCategoryAssignementUseCase.deleteCategoryAssignement(id);

      return res
        .status(200)
        .json({ message: "service category  deleted successfully" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
};
