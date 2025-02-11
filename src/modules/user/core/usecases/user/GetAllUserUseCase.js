const UserRepository = require('../../../infrastructure/repositories/UserRepository');

class GetAllUserUseCase {

    static async getAll(userPaginateFilter, page = 1, perPage = 15){
        return await UserRepository.getAll(userPaginateFilter, page , perPage);
    }
}

module.exports = GetAllUserUseCase;