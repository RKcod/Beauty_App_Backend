const GetSeviceCategoryResource = require("../../resources/GetServiceCategoryResource");
const UpdateServiceCategoryCase= require("../../../core/usecases/serviceCategory/UpdateServiceCategoryUseCase");
module.exports = class UpdateRoleController {
  static async update(req, res) {
    try {
      const { id } = req.params;

      const updatedServiceCategory = await UpdateServiceCategoryCase.updateServiceCategory(id, req.body);

      const ServiceCategory = updatedServiceCategory[0];

      return res.status(201).json({
        message: " Service Category updated successfully.",
        data: GetSeviceCategoryResource.toResource(ServiceCategory),
      });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
};
