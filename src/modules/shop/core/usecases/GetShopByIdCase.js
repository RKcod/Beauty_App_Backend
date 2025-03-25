const ShopRepository = require("../../infrastructure/repositories/shopRepository");

module.exports = class GetShopByIdCase {
  static async findShop(id) {
    const shop = await ShopRepository.findById(id);
    if (!shop) {
      throw new Error("This shop does not exist");
    }
    return shop;
  }
};
