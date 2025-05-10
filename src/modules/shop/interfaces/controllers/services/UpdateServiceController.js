const getServicesResource = require("../../resources/GetservicesResource");
const UpdateServiceUseCase= require("../../../core/usecases/services/UpdateServicesUseCase");
const ImageUploadService = require("../../../../user/infrastructure/services/ImageUploadService");

module.exports = class UpdateServiceController {
  static async update(req, res) {
    try {
      const { id } = req.params;
       // Vérifier si une nouvelle image a été uploadée
       if (req.file) {
        ImageUploadService.validateImage(req.file);
        req.body.image = req.file.filename;
        
      }

      const updatedService = await UpdateServiceUseCase.updateService(id, req.body);

      const service = updatedService;
      console.log(service);

      return res.status(201).json({
        message: " Service updated successfully.",
        data: service,
      });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
};
