const getServicesResource = require("../../resources/GetservicesResource");
const createServiceUseCase = require("../../../core/usecases/services/CreateServiceUseCase");
const ImageUploadService = require("../../../../user/infrastructure/services/ImageUploadService");

module.exports = class CreateServiceController {
  static async create(req, res) {
    const serviceData = req.body;

    try {
      if (req.file) {
        ImageUploadService.validateImage(req.file);
        serviceData.image = req.file.filename;
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
