const getRolesUseCase = require("../../../core/usecases/role/GetRoleUseCase");
const RoleResource = require("../../resources/RoleResource");
const RolePaginateFilter = require("../../../application/filters/RolePaginateFilter");
module.exports = class GetRolesController {
  static async getRoles(req, res) {
    try {
      const rolePaginateFilter = new RolePaginateFilter(req.query);
      const roles = await getRolesUseCase.getRoles(
        rolePaginateFilter,
        req.query.page || 1,
        15
      );
      const rolesFormatted = RoleResource.collection(roles);
      return res.status(200).json({
        data: rolesFormatted,
      });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
};
