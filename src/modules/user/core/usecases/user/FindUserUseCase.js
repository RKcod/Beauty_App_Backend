const userRepository = require('../../../infrastructure/repositories/UserRepository')

module.exports = class FindUserUseCase {

    static async findUser(id){

        const user = await userRepository.findById(id);

        if(!user){
            throw new Error('This user does not exist');
        }

        return user;
    }
}