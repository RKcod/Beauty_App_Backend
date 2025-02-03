const PermissionResource = require("../../resources/PermissionResource");
const UpdatePermissionUseCase = require("../../../core/usecases/permission/UpdatePermissionUseCase");
module.exports = class UpdatePermissionController {
  static async update(req, res) {
    try {
      const { id } = req.params;

      const updatedPermission = await UpdatePermissionUseCase.updatePermission(id, req.body);

      const permission = updatedPermission[0];

      return res.status(201).json({
        message: "Permission updated successfully.",
        data: PermissionResource.toResource(permission),
      });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
};
