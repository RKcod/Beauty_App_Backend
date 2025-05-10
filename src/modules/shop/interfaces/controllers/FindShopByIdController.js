const FindShopByIdUseCase = require("../../core/usecases/FindShopByIdUseCase");
const GetShopsResource = require("../resources/GetShopsResourse");

module.exports = class FindShopByIdController {
  static async find(req, res) {
    try {
      const { id } = req.params;
      const shop = await FindShopByIdUseCase.findShop(id);
      const shopsFormatted = GetShopsResource.toResource(shop);

      return res.status(200).json({
        data: shopsFormatted,
      });
    } catch (error) {
      return res.status(404).json({ error: error.message });
    }
  }
};
