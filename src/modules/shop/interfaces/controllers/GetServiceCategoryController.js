const GetServiceCategoryCase = require("../../core/usecases/GetServiceCategoryUseCase");
const GetSeviceCategoryResource = require("../resources/GetServiceCategoryResource");
const ServiceCategoryPaginateFilter = require("../../application/filters/ShopPaginateFilter");

module.exports = class GetServiceCategoryController {
  static async getAll(req, res) {
    try {
      const dataPaginateFilter = new ServiceCategoryPaginateFilter(req.query);
      const data = await GetServiceCategoryCase.getServiceCategory(
        dataPaginateFilter,
        req.query.page || 1,
        15
      );
      const dataFormatted = GetSeviceCategoryResource.collection(data.data);
      return res.status(200).json({
        data: dataFormatted,
        pagination: data.pagination,
      });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
};
