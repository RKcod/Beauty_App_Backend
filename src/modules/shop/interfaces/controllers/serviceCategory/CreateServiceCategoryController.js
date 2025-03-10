const CreateServiceCategoryUseCase = require("../../../core/usecases/serviceCategory/CreateServiceCategoryUseCase");
const GetServiceCategoryResource = require("../../resources/GetServiceCategoryResource");

module.exports = class CreateServiceCategoryController {
  static async create(req, res) {
    const serviceData = req.body;

    try {
      const serviceCategory = await CreateServiceCategoryUseCase.createCategory(
        serviceData
      );

      const serviceCategoryFormatted = GetServiceCategoryResource.toResource(
        serviceCategory[0]
      );

      return res.status(201).json({
        message: "service category created successfully",
        data: serviceCategoryFormatted,
      });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
};
