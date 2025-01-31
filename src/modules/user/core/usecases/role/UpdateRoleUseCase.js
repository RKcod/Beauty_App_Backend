const RoleRepository = require("../../../infrastructure/repositories/RoleRepository");

module.exports = class UpdateRoleUseCase {
  static async updateUser(id, roleData) {
    const role = await RoleRepository.findById(id);

    if (!role) {
      throw new Error("This role doesn't exist");
    }

    const updatedRole = await RoleRepository.updateById(id, roleData);
    return updatedRole;
  }
};
