const RoleResource = require("../../resources/RoleResource");
const UpdateRoleUseCase = require("../../../core/usecases/role/UpdateRoleUseCase");
module.exports = class UpdateRoleController {
  static async update(req, res) {
    try {
      const { id } = req.params;

      const updatedRole = await UpdateRoleUseCase.updateRole(id, req.body);

      const role = updatedRole[0];

      return res.status(201).json({
        message: "Role updated successfully.",
        data: RoleResource.toResource(role),
      });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
};
