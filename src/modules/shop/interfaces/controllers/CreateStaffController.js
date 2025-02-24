const CreateStaffUseCase = require("../../core/usecases/CreateStaffUseCase");
const GetStaffsResource = require("../resources/GetStaffResource");

module.exports = class CreateStaffController { 
  static async create(req, res) {
    const staffData = req.body;

    try {
      const staff = await CreateStaffUseCase.createStaff(staffData);
      const staffFormatted = GetStaffsResource.toResource(staff);
      return res
        .status(201)
        .json({ message: "Staff created successfully", data: staffFormatted });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
};
