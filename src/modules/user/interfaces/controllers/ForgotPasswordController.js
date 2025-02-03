const ForgotPasswordUseCase = require("../../core/usecases/user/ForgotPasswordUseCase");

class ForgotPasswordController {

  static async forgot(req, res) {
    try {
      const {email} = req.body;

      await ForgotPasswordUseCase.forgotPassword(email);

      return res.status(201).json({ message: "Email sent successfully" });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

module.exports = ForgotPasswordController;
