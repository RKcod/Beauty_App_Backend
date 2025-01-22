const deleteUserUseCase = require("../../core/usecases/DeleteUserUseCase");

class DeleteUserController {
  static async deleteUser(req, res) {
    try {
      const {id} = req.params;

      console.log('my id' , id)
      await deleteUserUseCase.delete(id);

      return res.status(201).json({ message: "User deleted successfully" });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

module.exports = DeleteUserController;
