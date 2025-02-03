const PermissionRepository = require("../../../infrastructure/repositories/PermissionRepository");

module.exports = class UpdatePermissionUseCase {
  static async updatePermission(id, permissionData) {
    const permission = await PermissionRepository.findById(id);

    if (!permission) {
      throw new Error("This permission doesn't exist");
    }

    const updatedPermission = await PermissionRepository.updateById(id, permissionData);
    return updatedPermission;
  }
};
