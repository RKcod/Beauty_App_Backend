const getServicesResource = require("../../resources/GetservicesResource");
const createServiceUseCase = require("../../../core/usecases/services/CreateServiceUseCase");
module.exports = class CreateServiceController {
  static async create(req, res) {
    const serviceData = req.body;

    try {
      if (req.file) {
        serviceData.image = `/uploads/${req.file.filename}`;
      }
      const service = await createServiceUseCase.createService(serviceData);
      const servicesFormatted = getServicesResource.toResource(service);
      return res
        .status(201)
        .json({ message: "Service created successfully", data: servicesFormatted });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
};
