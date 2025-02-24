const DeleteShopUseCase = require("../../core/usecases/DeleteShopUseCase");

module.exports = class DeleteShopController {
  static async delete(req, res) {
    const { id } = req.params;

    try {
      await DeleteShopUseCase.deleteShop(id);

      return res.status(200).json({ message: "Shop deleted successfully" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
};
