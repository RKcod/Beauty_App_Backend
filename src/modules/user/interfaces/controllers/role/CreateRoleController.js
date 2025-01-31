const createRoleUseCase = require("../../../core/usecases/role/CreateRoleUseCase");
const RoleResource = require("../../resources/RoleResource");
module.exports = class CreateRoleController {
  static async create(req, res) {
    const roleData = req.body;
    try {
      const role = await createRoleUseCase.createRole(roleData);
      return res.status(201).json({
        message: "Role created successfully",
        data: RoleResource.toResource(role),
      });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
};
