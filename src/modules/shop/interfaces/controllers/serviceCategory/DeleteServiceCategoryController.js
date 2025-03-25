const deleteServiceCategoryUseCase = require("../../../core/usecases/serviceCategory/DeleteServiceCategoryUseCase");
module.exports = class DeleteServiceCategoryController {
  static async delete(req, res) {
    const { id } = req.params;

    try {
      await deleteServiceCategoryUseCase.deleteServiceCategory(id);

      return res
        .status(200)
        .json({ message: "service category deleted successfully" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
};
