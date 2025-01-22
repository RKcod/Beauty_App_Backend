
const getAllUsersUseCase = require("../../core/usecases/GetAllUserUseCase");

class GetAllUsersController {
  static async getAll(req, res) {
    try {

      const users = await getAllUsersUseCase.getAll();

      return res.status(201).json({
       users
      });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

}

module.exports = GetAllUsersController;
