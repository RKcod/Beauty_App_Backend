const db = require("../../../../../knexInstance");
const PermissionModel = require("../models/PermissionModel");

class PermissionRepository {
  static async getAllPermissions() {
    return db(PermissionModel.getTableName()).select("*");
  }

  static async findByName(permissionName) {
    return db(PermissionModel.getTableName()).where({ name: permissionName }).first();
  }

  static async findById(permissionId) {
    return db(PermissionModel.getTableName()).where({ id: permissionId }).first();
  }

  static async create(permissionData) {
    return db(PermissionModel.getTableName()).insert(permissionData).returning("*");
  }

  static async updateById(permissionId, permissionData) {
    return db(PermissionModel.getTableName())
      .where({ id: permissionId })
      .update(permissionData)
      .returning("*");
  }

  static async deleteById(permissionId) {
    return db(PermissionModel.getTableName()).where({ id: permissionId }).del();
  }
}

module.exports = PermissionRepository;
