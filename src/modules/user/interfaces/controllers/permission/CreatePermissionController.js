const createPermissionUseCase = require("../../../core/usecases/permission/CreatePermissionUseCase");
const PermissionResource = require("../../resources/PermissionResource");
module.exports = class CreateRoleController {
  static async create(req, res) {
    const permissionData = req.body;
    try {
      const permission = await createPermissionUseCase.createPermission(permissionData);
      return res.status(201).json({
        message: "Permission created successfully",
        data: PermissionResource.toResource(permission),
      });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
};
