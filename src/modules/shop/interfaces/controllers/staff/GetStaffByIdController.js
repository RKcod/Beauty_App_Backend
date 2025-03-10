const GetStaffByIdCase = require("../../../core/usecases/staffs/GetStaffByIdUseCase");
const GetStaffsResource = require("../../resources/GetStaffResource");
module.exports = class DeleteStaffController {
  static async find(req, res) {
    try {
      const { id } = req.params;
      const staff = await GetStaffByIdCase.findStaff(id);
      const staffsFormatted = GetStaffsResource.toResource(staff);

      return res
        .status(200)
        .json({ message: "successfully", data: staffsFormatted });
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  }
};
