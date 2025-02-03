const PermissionRepository = require('../../../infrastructure/repositories/PermissionRepository');
module.exports = class FindPermissionUseCase{
    static async findPermission(id){
        const permission = await PermissionRepository.findById(id);
        
        if(!permission){
            throw new Error('This permission does not exist');
        }

        return permission;
    }
}