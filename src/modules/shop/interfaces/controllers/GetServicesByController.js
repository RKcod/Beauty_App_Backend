const GetServiceByUseCase = require("../../core/usecases/GetServiceByUseCase");
const GetServicesResource = require("../resources/GetservicesResource");

module.exports = class GetServiceByIdController {
  static async getById(req, res) {
    try {
      const { id } = req.params;
      const service = await GetServiceByUseCase.findService(id);
      const servicesFormatted = GetServicesResource.toResource(service);

      return res.status(200).json({
        data: servicesFormatted,
      });
    } catch (error) {
      return res.status(404).json({ error: error.message });
    }
  }
};
