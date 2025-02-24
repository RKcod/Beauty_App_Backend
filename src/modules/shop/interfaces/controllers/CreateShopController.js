const createShopUseCase = require("../../core/usecases/CreateShopUseCase");
const getShopsResource = require("../resources/GetShopsResourse");

module.exports = class CreateShopController {
  static async create(req, res) {
    const shopData = req.body;

    try {
      const shop = await createShopUseCase.createShop(shopData);
      const shopFormatted = getShopsResource.toResource (shop);
      return res
        .status(201)
        .json({ message: "Shop created successfully", data: shopFormatted });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
};
