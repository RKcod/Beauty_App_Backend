const GetCategoryAssignementResource = require("../../resources/GetCategoryAssignementResource");
const CreateCategoryAssignementUseCase = require("../../../core/usecases/categoryAssignements/CreateCategoryAssignementsUseCase");
module.exports = class CreateServiceCategoryController {
  static async create(req, res) {
    const serviceData = req.body;


    try {
      const service = await CreateCategoryAssignementUseCase.createCategoryAssignement(
        serviceData
      );
      console.log("🔥 Service Category brut :", service);

      const categoryAssignementFormatted = GetCategoryAssignementResource.collection(service);
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
