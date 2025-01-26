const ImageUploadService = require("../../infrastructure/services/ImageUploadService");
const UpdateUserUseCase = require("../../core/usecases/UpdateUserUseCase");
module.exports = class UpdateUserController {
  static async update(req, res) {
    try {
      const { id } = req.params;

      if (req.file) {
        ImageUploadService.validateImage(req.file);
        req.body.image = req.file.filename;
      }

      const updatedUser = await UpdateUserUseCase.updateUser(id, req.body);

      const user = updatedUser[0];

      return res.status(201).json({
        message: "User updated successfully.",
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
};
