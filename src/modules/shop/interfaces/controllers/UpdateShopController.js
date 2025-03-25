const UpdateShopUseCase = require("../../core/usecases/UpdateShopsUseCase");
const GetShopsResource = require("../resources/GetShopsResourse");
module.exports = class UpdateShopController {
  static async update(req, res) {
    try {
      const { id } = req.params;

      const updatedShop = await UpdateShopUseCase.updateShop(id, req.body);

      const Shop = updatedShop[0];

      return res.status(201).json({
        message: " Service updated successfully",
        data: GetShopsResource.toResource(Shop),
      });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
};
