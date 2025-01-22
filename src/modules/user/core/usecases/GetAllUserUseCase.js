const UserRepository = require('../../infrastructure/repositories/UserRepository');

class GetAllUserUseCase {

    static async getAll(){

        return await UserRepository.getAll();
    }
}

module.exports = GetAllUserUseCase;