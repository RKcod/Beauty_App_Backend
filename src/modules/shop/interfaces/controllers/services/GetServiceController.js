const getServiceUseCase = require("../../../core/usecases/services/GetServiceUseCase");
const getServicesResource = require("../../resources/GetservicesResource");
const ServicePaginateFilter = require("../../../application/filters/ShopPaginateFilter");
module.exports = class GetServiceByIdController {
  static async getAll(req, res) {
    try {
      const servicePaginateFilter = new ServicePaginateFilter(req.query);
      const sercices = await getServiceUseCase.getServices(
        servicePaginateFilter,
        req.query.page || 1,
        15
      );
      const servicesFormatted = getServicesResource.collection(sercices.data);
      return res.status(200).json({
        data: servicesFormatted,
        pagination: sercices.pagination,
      });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
};
