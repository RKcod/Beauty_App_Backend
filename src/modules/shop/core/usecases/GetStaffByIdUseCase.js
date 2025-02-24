const StaffRepository = require("../../infrastructure/repositories/StaffRepository");

module.exports = class GetStaffByIdCase {
  static async findStaff(id) {
    const staff = await StaffRepository.findById(id);
    if (!staff) {
      throw new Error("This staff does not exist");
    }
    return staff;
  }
};
