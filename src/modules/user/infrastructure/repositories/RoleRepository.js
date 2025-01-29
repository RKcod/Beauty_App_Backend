const db = require("../../../../../knexInstance");
const RoleModel = require("../models/RoleModel");
class RoleRepository {
 
  static async getAllRoles() {
    return db(RoleModel.getTableName()).select("*");
  }

  
  static async findByName(roleName) {
    return db(RoleModel.getTableName()).where({ name: roleName }).first();
  }

  
  static async findById(roleId) {
    return db(RoleModel.getTableName()).where({ id: roleId }).first();
  }


  static async create(roleData) {
    return db(RoleModel.getTableName()).insert(roleData).returning("*");
  }


  static async updateById(roleId, roleData) {
    return db(RoleModel.getTableName()).where({ id: roleId }).update(roleData).returning("*");
  }


  static async deleteById(roleId) {
    return db(RoleModel.getTableName()).where({ id: roleId }).del();
  }


  static async getPermissions(roleId) {
    return db(RoleModel.getRolePermissionsTable())
      .join("permissions", "role_permissions.permission_id", "permissions.id")
      .select("permissions.id", "permissions.name")
      .where("role_permissions.role_id", roleId);
  }

 
  static async assignPermission(roleId, permissionId) {
    return db(RoleModel.getRolePermissionsTable()).insert({
      role_id: roleId,
      permission_id: permissionId,
    });
  }

 
  static async removePermission(roleId, permissionId) {
    return db(RoleModel.getRolePermissionsTable())
      .where({
        role_id: roleId,
        permission_id: permissionId,
      })
      .del();
  }
}

module.exports = RoleRepository;
