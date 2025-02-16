
const getShopsUseCase = require("../../core/usecases/GetShopUseCase");
const getShopsResource = require("../resources/GetShopsResourse");
const ShopPaginateFilter = require("../../application/filters/ShopPaginateFilter");

class GetShopsController {
  static async getAll(req, res) {
    try {
      const shopPaginateFilter = new ShopPaginateFilter(req.query);
      const shops = await getShopsUseCase.getShops(
        shopPaginateFilter,
        req.query.page || 1,
        15
      );
      const shopsFormatted = getShopsResource.collection(shops.data);
      return res.status(200).json({
        data: shopsFormatted,
        pagination : shops.pagination
      });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

}

module.exports = GetShopsController;
