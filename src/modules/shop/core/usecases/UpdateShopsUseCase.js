const ShopRepository = require("../../infrastructure/repositories/ShopRepository");

module.exports = class UpdateShopUseCase {
  static async updateShop(id, data) {
    const shop = await ShopRepository.findById(id);
    if (!shop) {
      throw new Error("This shop id does not exist");
    }
    const updateShopdata = await ShopRepository.updateById(id, data);
    return updateShopdata;
  }
};
