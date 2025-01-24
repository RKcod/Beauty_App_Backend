const AuthRequest = require("../../application/requests/AuthRequest");
const AuthUseCase = require("../../core/usecases/AuthUseCase");
const Helpers = require("../../../../adapters/Helpers");
const ImageUploadService = require("../../infrastructure/services/ImageUploadService");
class AuthController {
  static async register(req, res) {
    try {
      AuthRequest.validateRegister(req.body);

      if (req.file) {
        ImageUploadService.validateImage(req.file);
        req.body.image = req.file.filename;
      }

      const users = await AuthUseCase.register(req.body, req.file);

      const user = users[0];

      console.log("user created", user);

      await Helpers.sendMail(user.email, "Welcome to Our platform .", null);

      return res.status(201).json({
        message: "User created successfully.",
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          image: user.image,
          phone: user.phone,
          address: user.address,
          city: user.city,
          created_at: user.created_at,
          updated_at: user.updated_at,
        },
      });
    } catch (error) {
      if (req.file) {
        await ImageUploadService.deleteImage(req.file.filename);
      }

      return res.status(400).json({ error: error.message });
    }
  }

  static async login(req, res) {
    try {
      // Valider la requête
      AuthRequest.validateLogin(req.body);

      // Exécuter le cas d'utilisation
      const response = await AuthUseCase.login(req.body);

      return res
        .status(200)
        .json({ message: "user connected successfully", response });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

module.exports = AuthController;
