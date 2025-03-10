const ServiceCategoryRepository = require("../../../infrastructure/repositories/ServiceCategoryRepository");

module.exports = class DeleteServiceCategoryUseCse {

    static async getCategoryById(categoryId) {
        if (!categoryId) {
            throw new Error("This service category id does not exist");
          }
        return await ServiceCategoryRepository.findById(categoryId);
      }
}