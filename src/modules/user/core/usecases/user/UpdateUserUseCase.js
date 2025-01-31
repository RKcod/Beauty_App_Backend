const userRepository = require("../../../infrastructure/repositories/UserRepository");
const passwordService = require("../../../infrastructure/services/PasswordService");
module.exports = class UpdateUserUseCase {
  static async updateUser(id, userData) {
    const user = await userRepository.findById(id);

    if (!user) {
      throw new Error("This user not exist");
    }

    if (userData.password) {
      user.password = await passwordService.hashPassword(userData.password, 10);
    }

    const updatedUser = await userRepository.updateById(id, userData);
    return updatedUser;
  }
};
