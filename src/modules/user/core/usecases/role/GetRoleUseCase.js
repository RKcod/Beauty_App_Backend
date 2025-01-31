const RoleRepository = require('../../../infrastructure/repositories/RoleRepository');

class GetRoleUseCase {

    static async getRoles(userPaginateFilter, page = 1, perPage = 15){

        return await RoleRepository.getAllRoles(userPaginateFilter, page = 1, perPage = 15);
    }
}

module.exports = GetRoleUseCase;