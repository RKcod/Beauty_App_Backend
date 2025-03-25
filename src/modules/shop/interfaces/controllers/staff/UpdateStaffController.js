const getStaffsResource = require("../../resources/GetStaffResource");
const updateStaffUseCase = require("../../../core/usecases/staffs/UpdateStaffsUseCase");
module.exports = class UpdateStaffController {
  static async update(req, res) {
    try {
      const { id } = req.params;

      const updatedStaff = await updateStaffUseCase.updateStaff(id, req.body);

      const Staff = updatedStaff[0];

      return res.status(201).json({
        message: " Staff updated successfully.",
        data: getStaffsResource.toResource(Staff),
      });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
};
