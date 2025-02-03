const getPermissionsUseCase = require("../../../core/usecases/permission/GetPermissionUseCase");
const PermissionResource = require("../../resources/PermissionResource");
const RolePaginateFilter = require("../../../application/filters/RolePaginateFilter");
module.exports = class GetPermissionsController {
  static async getPermissions(req, res) {
    try {
      const permissionPaginateFilter = new RolePaginateFilter(req.query);
      const permissions = await getPermissionsUseCase.getPermissions(
        permissionPaginateFilter,
        req.query.page || 1,
        15
      );
      const permissionsFormatted = PermissionResource.collection(permissions);
      return res.status(200).json({
        data: permissionsFormatted,
      });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
};
