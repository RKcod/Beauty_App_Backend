const getCategoryAssignementResource = require("../../resources/GetCategoryAssignementResource");
const createCategoryAssignementUseCase = require("../../../core/usecases/categoryAssignements/CreateCategoryAssignementUseCase");
module.exports = class CreateCategoryAssignementController {
  static async create(req, res) {
    const serviceData = req.body;


    try {
      const service = await createCategoryAssignementUseCase.createCategoryAssignement(
        serviceData
      );
      console.log("🔥 Service Category brut :", service);

      const categoryAssignementFormatted = getCategoryAssignementResource.toResource(service);
      return res
        .status(201)
        .json({
          message: "service category created successfully",
          data: categoryAssignementFormatted,
        });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
};
