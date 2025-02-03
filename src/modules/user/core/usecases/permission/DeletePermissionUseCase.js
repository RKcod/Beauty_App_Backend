const PermissionRepository = require("../../../infrastructure/repositories/PermissionRepository");
module.exports = class DeletePermissionUseCase {
  static async deletePermission(id) {
    const permission = await PermissionRepository.findById(id);

    if (!permission) {
      throw new Error("This permission does not exist");
    }

    return await PermissionRepository.deleteById(id);
  }
};
