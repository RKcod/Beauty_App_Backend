const staffRepository = require("../../../infrastructure/repositories/StaffRepository");
const shopRepository = require("../../../infrastructure/repositories/ShopRepository");
const userRepository = require("../../../../user/infrastructure/repositories/UserRepository");
const StaffEntitie = require("../../entities/Staff");


module.exports = class CreateStaffUseCase {
  static async createStaff(staffData) {
    const { user_id, shop_id, role } = staffData;
    const shopId = await shopRepository.findById(staffData.shop_id);
    if (!shopId) {
      throw new Error("this shop id does exist");
    }
    const userId = await userRepository.findById(staffData.user_id);
    if (!userId) {
      throw new Error("this user id does exist");
    }
    const staffFormated = new StaffEntitie(staffData);

    return await staffRepository.create(staffFormated);
  }
};
