const serviceCategoryRepository = require("../../../infrastructure/repositories/ServiceCategoryRepository");

module.exports = class FindServiceCategoryByUseCase {

    static async findServiceCategory(categoryId) {
        if (!categoryId) {
            throw new Error("This service category id does not exist");
          }
        return await serviceCategoryRepository.findById(categoryId);
      }
}