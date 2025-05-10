const findServiceCategoryByIdUseCase = require("../../../core/usecases/serviceCategory/FindServiceCategoryByUseCase");
const getSeviceCategoryResource = require("../../resources/GetServiceCategoryResource");

module.exports = class FindServiceCategoryByIdController {
  static async find(req, res) {
    try {
      const { id } = req.params;
      const data = await findServiceCategoryByIdUseCase.findServiceCategory(id);
      const datasFormatted = getSeviceCategoryResource.toResource(data);

      return res.status(200).json({
        data: datasFormatted,
      });
    } catch (error) {
      return res.status(404).json({ error: error.message });
    }
  }
};
