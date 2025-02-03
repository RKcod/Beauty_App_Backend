const Role = require("../../entities/Role");
const RoleRepository = require("../../../infrastructure/repositories/RoleRepository");
module.exports = class CreateRoleUseCase {
  static async createRole(roleData) {
    const role = new Role(roleData);
    console.log("role",role);
    const existingRole = await RoleRepository.findBySlug(role.slug);
    if (existingRole) {
      throw new Error("This role is already existed.");
    }

    const savedRole = await RoleRepository.create(role);

    return savedRole;
  }
};
