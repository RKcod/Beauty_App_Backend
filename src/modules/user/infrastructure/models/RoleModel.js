const Permission = require("./PermissionModel");
const db = require("../../../../../knexInstance");
class RoleModel {
  static getTableName() {
    return "roles";
  }

  static getRolePermissionsTable() {
    return "role_permissions";
  }

  static async getPermissions(roleId) {
    return db(Permission.getTableName())
      .join(
        "role_permissions",
        "permissions.id",
        "role_permissions.permission_id"
      )
      .where("role_permissions.role_id", roleId)
      .select(
        "permissions.id",
        "permissions.name",
        "permissions.slug",
        "permissions.category"
      );
  }

  static async attachPermissions(roleId, permissionIds) {
    const rolePermissions = permissionIds.map((permId) => ({
      role_id: roleId,
      permission_id: permId,
    }));
    return db(RoleModel.getRolePermissionsTable()).insert(rolePermissions);
  }
}

module.exports = RoleModel;
