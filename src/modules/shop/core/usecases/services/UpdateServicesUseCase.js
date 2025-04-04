const ServiceRepository = require("../../../infrastructure/repositories/ServiceRepository");
const ServiceEntitie = require("../../entities/Service");



module.exports = class UpdateServiceUseCase {
  static async updateService(id, data) {
    const service = await ServiceRepository.findById(id);
    if (!service) {
      throw new Error("This service id does not exist");
    }
     // Si une nouvelle image est fournie, supprimer l'ancienne (sauf l'image par défaut)
     if (data.image && shop.service !== "/uploads/default-shop.png") {
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