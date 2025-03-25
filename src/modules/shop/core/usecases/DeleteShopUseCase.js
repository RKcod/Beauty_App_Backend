const ShopRepository = require("../../infrastructure/repositories/shopRepository");

module.exports = class DeleteShopUseCase {
  static async deleteShop(id) {
    const shop = await ShopRepository.findById(id);

    if (!shop) {
      throw new Error("Shop not found");
    }

    return await ShopRepository.deleteById(id);
  }
};
