const findServiceByUseCase = require("../../../core/usecases/services/FindServiceByUseCase");
const getServicesResource = require("../../resources/GetservicesResource");

module.exports = class FindServiceByController {
  static async find(req, res) {
    try {
      const { id } = req.params;
      const service = await findServiceByUseCase.findService(id);
      const servicesFormatted = getServicesResource.toResource(service);

      return res.status(200).json({
        data: servicesFormatted,
      });
    } catch (error) {
      return res.status(404).json({ error: error.message });
    }
  }
};
