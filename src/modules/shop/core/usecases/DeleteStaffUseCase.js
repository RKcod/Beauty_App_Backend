const StaffRepository = require("../../infrastructure/repositories/StaffRepository");

module.exports = class DeleteStaffUseCase {
  static async deleteShop(id) {
    const staff = await StaffRepository.findById(id);

    if (!staff) {
      throw new Error("Staff not found");
    }

    return await StaffRepository.deleteById(id);
  }
};
