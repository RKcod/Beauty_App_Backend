const GetShopByIdCase = require("../../core/usecases/GetShopByIdCase");
const GetShopsResource = require("../resources/GetShopsResourse");

module.exports = class GetShopByIdController {
  static async getById(req, res) {
    try {
      const { id } = req.params;
      const shop = await GetShopByIdCase.findShop(id);
      const shopsFormatted = GetShopsResource.toResource(shop);

      return res.status(200).json({
        data: shopsFormatted,
      });
    } catch (error) {
      return res.status(404).json({ error: error.message });
    }
  }
};
