const StaffRepository = require("../../infrastructure/repositories/StaffRepository");

module.exports = class CreateStaffUseCase {
  static async createStaff(staffData) {
    const { user_id, shop_id, role } = staffData;
    return await StaffRepository.create(staffData);
  }
};
