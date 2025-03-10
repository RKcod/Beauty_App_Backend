const StaffRepository = require("../../../infrastructure/repositories/StaffRepository");
const StaffEntitie = require("../../entities/Staff");


module.exports = class UpdateStaffUseCase {
  static async updateStaff(id, data) {
    const staff = await StaffRepository.findById(id);
    if (!staff) {
      throw new Error("This staff id does not exist");
    }
    const staffFormated = new StaffEntitie(data);

    const updateStaffdata = await StaffRepository.updateById(id, staffFormated);
    return updateStaffdata;
  }
};
