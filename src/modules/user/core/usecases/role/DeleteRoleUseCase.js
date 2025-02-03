const RoleRepository = require("../../../infrastructure/repositories/RoleRepository");
module.exports = class DeleteRoleUseCase {
  static async delete(id) {
    const role = await RoleRepository.findById(id);

    if (!role) {
      throw new Error("This role does not exist");
    }

    return await RoleRepository.deleteById(id);
  }
};
