const GetStaffUseCase = require("../../core/usecases/GetStaffUseCase");
const StaffPaginateFilter = require("../../application/filters/ShopPaginateFilter");
const GetStaffsResource = require("../resources/GetStaffResource");

module.exports = class DeleteStaffController {
  static async getAll(req, res) {
    try {
      const staffPaginateFilter = new StaffPaginateFilter(req.query);
      const staffs = await GetStaffUseCase.getStaffs(
        staffPaginateFilter,
        req.query.page || 1,
        15
      );
      const staffsFormatted = GetStaffsResource.collection(staffs.data);

      return res.status(200).json({
        message: "successfully",
        data: staffsFormatted,
        pagination: staffs.pagination,
      });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
};
