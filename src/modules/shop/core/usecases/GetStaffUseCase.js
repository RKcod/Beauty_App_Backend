const StaffRepository = require("../../infrastructure/repositories/StaffRepository");

module.exports = class GetStaffUseCase {
  static async getStaffs(staffPaginateFilter, page = 1, perPage = 15) {
    return await StaffRepository.getAll(
      staffPaginateFilter,
      (page = 1),
      (perPage = 15)
    );
  }
};
