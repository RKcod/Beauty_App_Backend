const jwt = require("jsonwebtoken");
const userRepository = require("../../../infrastructure/repositories/UserRepository");
const Helper = require("../../../../../shared/Helpers");
module.exports = class ForgotPasswordUseCase {
  static async forgotPassword(email) {
    const user = await userRepository.findByEmail(email);

    if (!user) {
      throw new Error("User does not exist");
    }

    const resetToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    return await Helper.sendMail(user, "Forgot Password", "forgot", {
      resetToken,
    });
  }
};
