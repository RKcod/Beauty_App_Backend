const jwt = require("jsonwebtoken");
const userRepository = require("../../infrastructure/repositories/UserRepository");
const passwordHelper = require("../../infrastructure/services/PasswordService");

module.exports = class ResetPasswordUseCase {
  static async resetPassword(token, oldPassword, newPassword) {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await userRepository.findById(decoded.id);

    if (!user) {
      throw new Error("User not found");
    }

    const isMatch = await passwordHelper.comparePassword(
      oldPassword,
      user.password
    );
    if (!isMatch) {
      throw new Error("Old password is incorrect");
    }

    const hashedPassword = await passwordHelper.hashPassword(newPassword);

    // Vérifier que le nouveau mot de passe est différent de l'ancien
    const isSamePassword = await passwordHelper.comparePassword(
      oldPassword,
      hashedPassword
    );
    if (isSamePassword) {
      throw new Error("The new password must be different from the old one");
    }

    const updatedUser = await userRepository.updateById(user.id, {
      password: hashedPassword,
    });

    return updatedUser;
  }
};
