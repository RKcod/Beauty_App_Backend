const PermissionRepository = require('../../../infrastructure/repositories/PermissionRepository');

class GetPermissionUseCase {

    static async getPermissions(permissionPaginateFilter, page = 1, perPage = 15){

        return await PermissionRepository.getAllPermissions(permissionPaginateFilter, page = 1, perPage = 15);
    }
}

module.exports = GetPermissionUseCase;