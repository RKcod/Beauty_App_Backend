const getCategoryAssignementUseCase = require("../../../core/usecases/categoryAssignements/GetCategoryAssignementUseCase");
const getCategoryAssignementResource = require("../../resources/GetCategoryAssignementResource");
const serviceCategoryAssignementPaginateFilter = require("../../../application/filters/ShopPaginateFilter");

module.exports = class GetCategoryAssignementController {
  static async getAll(req, res) {
    try {
      const dataPaginateFilter = new serviceCategoryAssignementPaginateFilter(
        req.query
      );
      const data = await getCategoryAssignementUseCase.getCategoryAssignement(
        dataPaginateFilter,
        req.query.page || 1,
        15
      );

      console.log("categories",data);
      const dataFormatted = getCategoryAssignementResource.collection(
        data.data
      );
      return res.status(200).json({
        data: dataFormatted,
        pagination: data.pagination,
      });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
};
