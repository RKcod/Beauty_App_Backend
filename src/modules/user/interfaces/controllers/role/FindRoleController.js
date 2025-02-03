const findRoleUseCase = require("../../../core/usecases/role/FindRoleUseCase");
const RoleResource = require("../../resources/RoleResource");
module.exports = class FindRoleController {
  static async find(req, res) {
    const { id } = req.params;
    console.log('id role' , id)
    try {
      const role = await findRoleUseCase.findRole(id);

      console.log('role', role)
      return res.status(200).json({ data: RoleResource.toResource(role) });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
};
