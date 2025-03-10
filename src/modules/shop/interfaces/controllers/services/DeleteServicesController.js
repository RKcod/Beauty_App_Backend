const DeleteServiceUseCase = require("../../../core/usecases/services/DeleteServiceUseCase");
module.exports = class DeleteServiceController {
  static async delete(req, res) {
    const { id } = req.params;

    try {
      await DeleteServiceUseCase.deleteService(id);

      return res.status(200).json({ message: "service deleted successfully" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
};
