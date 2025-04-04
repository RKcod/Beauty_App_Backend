const ShopRepository = require("../../infrastructure/repositories/ShopRepository");

module.exports = class UpdateShopUseCase {
  static async updateShop(id, data) {
    const shop = await ShopRepository.findById(id);
    if (!shop) {
      throw new Error("This shop id does not exist");
    }
     // Si une nouvelle image est fournie, supprimer l'ancienne (sauf l'image par défaut)
     if (data.image && shop.image !== "/uploads/default-shop.png") {
      const oldImagePath = path.join(__dirname, "../../../../", shop.image);
      if (fs.existsSync(oldImagePath)) {
        fs.unlinkSync(oldImagePath); // Supprime l'ancienne image
      }
    }
    const updateShopdata = await ShopRepository.update(id, data);
    return updateShopdata;
  }
};
