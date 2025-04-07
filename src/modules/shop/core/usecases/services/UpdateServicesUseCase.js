const ServiceRepository = require("../../../infrastructure/repositories/ServiceRepository");
const ServiceEntitie = require("../../entities/Service");
const path = require("path");
const fs = require("fs");



module.exports = class UpdateServiceUseCase {
  static async updateService(id, data) {
    const service = await ServiceRepository.findById(id);
    if (!service) {
      throw new Error("This service id does not exist");
    }
      // Vérifier si une nouvelle image est fournie et si l'ancienne n'est pas l'image par défaut
    if (data.image && service.image && service.image !== "/uploads/default-shop.png") {
      const oldImagePath = path.join(__dirname, "../../../../", service.image);

      if (fs.existsSync(oldImagePath)) {
        fs.unlinkSync(oldImagePath); // Supprime l'ancienne image
      }
    }
    const serviceFormated = new ServiceEntitie(data);

    const updatedService = await ServiceRepository.update(id, serviceFormated);

    return updatedService;
  }    
}