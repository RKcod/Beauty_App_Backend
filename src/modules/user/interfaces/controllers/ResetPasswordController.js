const ResetPasswordUseCase = require("../../core/usecases/ResetPasswordUseCase");

class ResetPasswordController {
    
  static async reset(req, res) {
    const { token, oldPassword, newPassword } = req.body;
    try {
      await ResetPasswordUseCase.resetPassword(token, oldPassword, newPassword);

      return res
        .status(200)
        .json({ message: "Password has been reset successfully" });
    } catch (error) {
      console.error("Reset password error:", error.message);

      // Gérer les erreurs liées au token
      if (error.name === "TokenExpiredError") {
        return res.status(400).json({ error: "Token has expired" });
      } else if (error.name === "JsonWebTokenError") {
        return res.status(400).json({ error: "Invalid token" });
      }

      return res
        .status(500)
        .json({ error: "An error occurred while resetting the password" });
    }
  }
}

module.exports = ResetPasswordController;
