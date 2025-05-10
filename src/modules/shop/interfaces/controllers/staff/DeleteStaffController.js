const deleteStaffUseCase = require("../../../core/usecases/staffs/DeleteStaffUseCase");

module.exports = class DeleteStaffController {
  static async delete(req, res) {
    const { id } = req.params;

    try {
       await deleteStaffUseCase.deleteShop(id);
      return res
        .status(200)
        .json({ message: "Shop deleted successfully", });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
