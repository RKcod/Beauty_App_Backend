class RoleModel {
    static getTableName() {
        return 'roles';
    }

    static getRolePermissionsTable() {
        return "role_permissions";
      }
}

module.exports = RoleModel;