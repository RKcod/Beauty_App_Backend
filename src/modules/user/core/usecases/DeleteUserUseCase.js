const UserRepository = require('../../infrastructure/repositories/UserRepository');

module.exports = class DeleteUserUseCase {

    static async delete(id){
        const user = await UserRepository.findById(id);

        if(!user){
            throw new Error('This user is not exist.');
        }

        return await UserRepository.deleteById(id);
    }
}