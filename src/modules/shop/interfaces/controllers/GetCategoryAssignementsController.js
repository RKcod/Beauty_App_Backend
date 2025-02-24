const GetCategoryAssignementCase = require("../../core/usecases/GetCategoryAssignementsUseCase");
const GetCategoryAssignementResource = require("../resources/GetCategoryAssignementResource");
const ServiceCategoryAssignementPaginateFilter = require("../../application/filters/ShopPaginateFilter");

module.exports = class GetServiceCategoryController {
  static async getAll(req, res) {
    try {
      const dataPaginateFilter = new ServiceCategoryAssignementPaginateFilter(
        req.query
      );
      const data = await GetCategoryAssignementCase.GetAllCategoryAssignement(
        dataPaginateFilter,
        req.query.page || 1,
        15
      );
      const dataFormatted = GetCategoryAssignementResource.collection(
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
