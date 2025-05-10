const getStaffUseCase = require("../../../core/usecases/staffs/GetStaffUseCase");
const StaffPaginateFilter = require("../../../application/filters/ShopPaginateFilter");
const getStaffsResource = require("../../resources/GetStaffResource");

module.exports = class GetStaffController {
  static async getAll(req, res) {
    try {
      const staffPaginateFilter = new StaffPaginateFilter(req.query);
      const staffs = await getStaffUseCase.getStaffs(
        staffPaginateFilter,
        req.query.page || 1,
        15
      );
      // console.log('oo',staffs);
      const staffsFormatted = getStaffsResource.collection(staffs.data);
      // console.log('ko', staffsFormatted);
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
