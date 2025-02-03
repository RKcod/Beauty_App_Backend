const findPermissionUseCase = require("../../../core/usecases/permission/FindPermissionUseCase");
const PermissionResource = require("../../resources/PermissionResource");
module.exports = class FindPermissionController {
  static async find(req, res) {
    const { id } = req.params;
    try {
      const permission = await findPermissionUseCase.findPermission(id);
      return res.status(200).json({ data: PermissionResource.toResource(permission) });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
};
