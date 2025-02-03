const Permission = require("../../entities/Permission");
const PermissionRepository = require("../../../infrastructure/repositories/PermissionRepository");
module.exports = class CreatePermissionUseCase {
  static async createPermission(permissionDataData) {
    const permission = new Permission(permissionDataData);
    const existingPermission = await RoleRepository.findBySlug(permission.slug);
    if (existingPermission) {
      throw new Error("This permission is already existed.");
    }

    const savedPermission = await PermissionRepository.create(permission);

    return savedPermission;
  }
};
