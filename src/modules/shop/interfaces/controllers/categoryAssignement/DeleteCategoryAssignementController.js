const deleteCategoryAssignementUseCase = require("../../../core/usecases/categoryAssignements/DeleteCategoryAssignementUseCase");
module.exports = class FindCategoryAssignementByIdController {
  static async delete(req, res) {
    const { id } = req.params;

    try {
    await deleteCategoryAssignementUseCase.deleteCategoryAssignement(id);

      return res
        .status(200)
        .json({ message: "service category  deleted successfully" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  static async remove(req, res) {
    try {
      const { serviceId, categoryId } = req.params;
      
      // Vérification des paramètres
      if (!serviceId || !categoryId) {
        return res.status(400).json({ message: "serviceId et categoryId sont requis." });
      }

      const result = await deleteCategoryAssignementUseCase.removeServiceFromCategory(serviceId, categoryId);

      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
