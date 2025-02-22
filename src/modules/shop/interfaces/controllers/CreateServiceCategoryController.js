const CreateServiceCategoryUseCase = require("../../../shop/core/usecases/CreateServiceCategoryUseCase");
module.exports = class CreateServiceCategoryController {
  static async create(req, res) {
    const serviceData = req.body;

    try {
      const service = await CreateServiceCategoryUseCase.createCategory(
        serviceData
      );
      return res
        .status(201)
        .json({
          message: "service category created successfully",
          data: service,
        });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
};
