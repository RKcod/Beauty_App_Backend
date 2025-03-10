const GetCategoryAssignementByIdCase = require("../../../core/usecases/categoryAssignements/GetCategoryAssignementsByUseCase");
const GetCategoryAssignementResource = require("../../resources/GetCategoryAssignementResource");

module.exports = class GetServiceCategoryByIdController {
  static async getById(req, res) {
    try {
      const { id } = req.params;
      const data =
        await GetCategoryAssignementByIdCase.createCategoryAssignement(id);
      const datasFormatted = GetCategoryAssignementResource.collection([data]);

      return res.status(200).json({
        data: datasFormatted,
      });
    } catch (error) {
      return res.status(404).json({ error: error.message });
    }
  }
};
