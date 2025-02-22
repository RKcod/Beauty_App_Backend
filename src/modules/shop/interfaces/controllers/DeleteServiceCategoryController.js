const DeleteServiceCategoryUseCase = require("../../../shop/core/usecases/DeleteServiceCategoryUseCae");
module.exports = class DeleteServiceCategoryController {
  static async delete(req, res) {
    const { id } = req.params;

    try {
      await DeleteServiceCategoryUseCase.getServiceCategoryById(id);

      return res
        .status(200)
        .json({ message: "service category deleted successfully" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
};
