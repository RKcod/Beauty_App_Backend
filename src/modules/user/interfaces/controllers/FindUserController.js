const FindUserUseCase = require("../../core/usecases/user/FindUserUseCase");
const UserResource = require("../resources/UserResource");
module.exports = class FindUserController {
  static async find(req, res) {
    try {
      const { id } = req.params;
      const user = await FindUserUseCase.findUser(id);
      return res.status(200).json(UserResource.toResource(user));
    } catch (error) {
      return res.status(404).json({error: error.message});
    }
  }
};
