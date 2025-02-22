const CreateServiceUseCase = require("../../core/usecases/CreateServiceUseCase");
module.exports = class CreateServiceController {
  static async create(req, res) {
    const serviceData = req.body;

    try {
      const service = await CreateServiceUseCase.createService(serviceData);
      return res
        .status(201)
        .json({ message: "Service created successfully", data: service });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
};
