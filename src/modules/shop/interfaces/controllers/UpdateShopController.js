const UpdateShopUseCase = require("../../core/usecases/UpdateShopsUseCase");
const GetShopsResource = require("../resources/GetShopsResourse");
const path = require("path");

module.exports = class UpdateShopController {
  static async update(req, res) {
    try {
      const { id } = req.params;
      const  shopData = { ...req.body };
       // Vérifier si une nouvelle image a été uploadée
       if (req.file) {
        // shopData.image = `/uploads/${req.file.filename}`;
        shopData.image = path.join("/uploads", req.file.filename);
      }

      const updatedShop = await UpdateShopUseCase.updateShop(id, shopData);

      const Shop = updatedShop;

      return res.status(201).json({
        message: " Service updated successfully",
        data: Shop,
      });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
};
