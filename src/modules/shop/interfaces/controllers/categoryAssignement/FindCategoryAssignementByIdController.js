const findCategoryAssignementByIdUseCase = require("../../../core/usecases/categoryAssignements/FindCategoryAssignementByUseCase");
const getCategoryAssignementResource = require("../../resources/GetCategoryAssignementResource");

module.exports = class FindCategoryAssignementByIdController {
  static async find(req, res) {
    try {
      const { id } = req.params;
      const data =
        await findCategoryAssignementByIdUseCase.findCategoryAssignement(id);
      const datasFormatted = getCategoryAssignementResource.collection([data]);

      return res.status(200).json({
        data: datasFormatted,
      });
    } catch (error) {
      return res.status(404).json({ error: error.message });
    }
  }
};
