const createShopUseCase = require("../../core/usecases/CreateShopUseCase");
const getShopsResource = require("../resources/GetShopsResourse");
const ImageUploadService = require("../../../user/infrastructure/services/ImageUploadService");


module.exports = class CreateShopController {
  static async create(req, res) {
    const shopData = req.body;

    try {
       // Vérifie si un fichier a été uploadé et ajoute son chemin
       if (req.file) {
        ImageUploadService.validateImage(req.file);
        shopData.image = req.file.filename;
      }
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
