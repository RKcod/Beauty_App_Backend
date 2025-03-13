const getServicesResource = require("../../resources/GetservicesResource");
const UpdateServiceUseCase= require("../../../core/usecases/services/UpdateServicesUseCase");
module.exports = class UpdateRoleController {
  static async update(req, res) {
    try {
      const { id } = req.params;

      const updatedService = await UpdateServiceUseCase.updateService(id, req.body);

      return res.status(201).json({
        message: " Service updated successfully.",
        data: getServicesResource.toResource(updatedService),
      });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
};
