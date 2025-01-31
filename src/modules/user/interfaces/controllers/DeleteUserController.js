const deleteUserUseCase = require("../../core/usecases/user/DeleteUserUseCase");

class DeleteUserController {
  static async deleteUser(req, res) {
    try {
      const {id} = req.params;
      await deleteUserUseCase.delete(id);

      return res.status(201).json({ message: "User deleted successfully" });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

module.exports = DeleteUserController;
