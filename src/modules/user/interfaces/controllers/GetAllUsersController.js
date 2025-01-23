
const getAllUsersUseCase = require("../../core/usecases/GetAllUserUseCase");
const getUsersResource = require('../resources/GetAllUsersResource');

class GetAllUsersController {
  static async getAll(req, res) {
    try {

      const users = await getAllUsersUseCase.getAll();
      const usersFormatted = getUsersResource.collection(users);
      return res.status(201).json({
        'data' :  usersFormatted
      });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

}

module.exports = GetAllUsersController;
