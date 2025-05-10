const getSeviceCategoryResource = require("../../resources/GetServiceCategoryResource");
const updateServiceCategoryCase= require("../../../core/usecases/serviceCategory/UpdateServiceCategoryUseCase");
module.exports = class UpdateServiceCategoryController {
  static async update(req, res) {
    try {
      const { id } = req.params;

      const updatedServiceCategory = await updateServiceCategoryCase.updateServiceCategory(id, req.body);

      const ServiceCategory = updatedServiceCategory[0];

      return res.status(201).json({
        message: " Service Category updated successfully.",
        data: getSeviceCategoryResource.toResource(ServiceCategory),
      });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
};
