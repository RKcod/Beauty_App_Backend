const GetServiceCategoryByIdCase = require("../../../core/usecases/serviceCategory/GetServiceCategoryByUseCase");
const GetSeviceCategoryResource = require("../../resources/GetServiceCategoryResource");

module.exports = class GetServiceCategoryByIdController {
  static async getById(req, res) {
    try {
      const { id } = req.params;
      const data = await GetServiceCategoryByIdCase.getCategoryById(id);
      const datasFormatted = GetSeviceCategoryResource.toResource(data);

      return res.status(200).json({
        data: datasFormatted,
      });
    } catch (error) {
      return res.status(404).json({ error: error.message });
    }
  }
};
