
const getAllUsersUseCase = require("../../core/usecases/user/GetAllUserUseCase");
const getUsersResource = require('../resources/GetAllUsersResource');
const UserPaginateFilter = require('../../application/filters/UserPaginateFilter');

class GetAllUsersController {
  static async getAll(req, res) {
    try {

      const userPaginateFilter = new UserPaginateFilter(req.query);
      const users = await getAllUsersUseCase.getAll(userPaginateFilter, req.query.page || 1, 1);
      const usersFormatted = getUsersResource.collection(users);
      return res.status(200).json({
        'data' :  usersFormatted
      });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

}

module.exports = GetAllUsersController;
