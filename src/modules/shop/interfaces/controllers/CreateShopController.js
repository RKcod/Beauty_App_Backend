const createShopUseCase = require('../../core/usecases/CreateShopUseCase');

module.exports = class CreateShopController {
  static async create(req, res) {
    const shopData = req.body;

    try {
      const shop = await createShopUseCase.createShop(shopData);
      return res
        .status(201)
        .json({ message: "Shop created successfully", data: shop });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
};
