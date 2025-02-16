const ShopRepository = require("../../infrastructure/repositories/ShopRepository");

module.exports = class DeleteShopUseCase {
  static async deleteShop(id) {
    const shop = await ShopRepository.findById(id);

    if (!shop) {
      throw new Error("Shop not found");
    }

    return await ShopRepository.deleteById(id);
  }
};
