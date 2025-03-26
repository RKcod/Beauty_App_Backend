const StaffRepository = require("../../../infrastructure/repositories/StaffRepository");

module.exports = class GetStaffUseCase {
  static async getStaffs(staffPaginateFilter, page = 1, perPage = 15) {
    // Vérification simple des paramètres
    return await StaffRepository.getAll(staffPaginateFilter, page, perPage);
    
  }
};
