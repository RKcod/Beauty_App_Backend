const ShopRepository = require("../../infrastructure/repositories/ShopRepository");
const path = require("path");
const fs = require("fs");


module.exports = class UpdateShopUseCase {
  static async updateShop(id, data) {
    const shop = await ShopRepository.findById(id);
    if (!shop) {
      throw new Error("This shop id does not exist");
    }
    // Si une nouvelle image est fournie, supprimer l'ancienne (sauf l'image par défaut)
    if (data.image && shop.image !== "/uploads/default-shop.png") {
      const oldImagePath = path.join(__dirname, "../../../../", shop.image);
      // if (fs.existsSync(oldImagePath)) {
      //   fs.unlinkSync(oldImagePath); // Supprime l'ancienne image
      // }
      if (oldImagePath) {
        const fullPath = path.join(__dirname, "../../../../", oldImagePath);
        
        // Vérifier si le chemin est bien un fichier et non un dossier
        if (fs.existsSync(fullPath) && fs.lstatSync(fullPath).isFile()) {
          fs.unlinkSync(fullPath);
          console.log(`Fichier supprimé : ${fullPath}`);
        } else {
          console.error(`Erreur : ${fullPath} n'est pas un fichier valide`);
        }
      }
    }
    const updateShopdata = await ShopRepository.update(id, data);
    return updateShopdata;
  }
};