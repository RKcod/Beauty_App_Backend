const getServiceCategoryUseCase = require("../../../core/usecases/serviceCategory/GetServiceCategoryUseCase");
const getSeviceCategoryResource = require("../../resources/GetServiceCategoryResource");
const serviceCategoryPaginateFilter = require("../../../application/filters/ShopPaginateFilter");

module.exports = class GetServiceCategoryController {
  static async getAll(req, res) {
    try {
      const dataPaginateFilter = new serviceCategoryPaginateFilter(req.query);
      const data = await getServiceCategoryUseCase.getServiceCategory(
        dataPaginateFilter,
        req.query.page || 1,
        15
      );
      const dataFormatted = getSeviceCategoryResource.collection(data.data);
      return res.status(200).json({
        data: dataFormatted,
        pagination: data.pagination,
      });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
};
