const RoleRepository = require('../../../infrastructure/repositories/RoleRepository');
module.exports = class FindRoleUseCase{
    static async findRole(id){
        const role = await RoleRepository.findById(id);
        
        if(!role){
            throw new Error('This role does not exist');
        }

        return role;
    }
}