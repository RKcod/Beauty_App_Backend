const CreateStaffUseCase = require("../../core/usecases/CreateStaffUseCase");

module.exports = class CreateStaffController { 
  static async create(req, res) {
    const staffData = req.body;

    try {
      const staff = await CreateStaffUseCase.createStaff(staffData);
      return res
        .status(201)
        .json({ message: "Staff created successfully", data: staff });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
};
