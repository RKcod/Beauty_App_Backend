const GetStaffsResource = require("../../resources/GetStaffResource");
const UpdateStaffUseCase = require("../../../core/usecases/staffs/UpdateStaffsUseCase");
module.exports = class UpdateRoleController {
  static async update(req, res) {
    try {
      const { id } = req.params;

      const updatedtaff = await UpdateStaffUseCase.updateStaff(id, req.body);

      const Staff = updatedtaff[0];

      return res.status(201).json({
        message: " Staff updated successfully.",
        data: GetStaffsResource.toResource(Staff),
      });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
};
