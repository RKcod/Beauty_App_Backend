const findStaffByIdUseCase = require("../../../core/usecases/staffs/FindStaffByIdUseCase");
const getStaffsResource = require("../../resources/GetStaffResource");
module.exports = class DeleteStaffController {
  static async find(req, res) {
    try {
      const { id } = req.params;
      const staff = await findStaffByIdUseCase.findStaff(id);
      const staffsFormatted = getStaffsResource.toResource(staff);

      return res
        .status(200)
        .json({ message: "successfully", data: staffsFormatted });
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  }
};
