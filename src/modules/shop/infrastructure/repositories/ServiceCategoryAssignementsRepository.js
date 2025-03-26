const ServiceCategoryAssignementsModel = require("../models/ServiceCategoryAssignementsModel");
const db = require("../../../../../knexInstance");
const paginationProvider = require("../../../../providers/PaginationProvider");

class ServiceCategoryAssignementRepository {
  // static async create(data) {
  //   // Insertion de l'assignation dans la base de données
  //   return db(ServiceCategoryAssignementsModel.getTableName())
  //     .insert(data)
  //     .returning("*");
  // }
  static async create(data) {
    try {
      // Insérer la revue dans la base de données
      const [serviceCategory] = await db(ServiceCategoryAssignementsModel.getTableName())
        .insert(data)
        .returning("*");

      // Récupérer la revue avec les relations (users et shops)
      const serviceCategoryWithRelations = await ServiceCategoryAssignementsModel
        .query()
        .findById(serviceCategory.id)
        .withGraphFetched("[service,category]"); // Charger les relations users et shops

      // Retourner la revue avec les relations peuplées
      return serviceCategoryWithRelations;
    } catch (error) {
      console.error("Error creating review:", error.message);
      console.error("Stack trace:", error.stack);
      throw new Error("An error occurred while creating the review");
    }
  }

  static async getAll(dataPaginateFilter, page, perPage) {
    let query = ServiceCategoryAssignementsModel.query()
      .select("*")
      .withGraphFetched("[service,category]");

    query = dataPaginateFilter.applyFilters(query);

    return paginationProvider.paginate(query, page, perPage);
  }

  // static async findById(dataId) {
  //   return await ServiceCategoryAssignementsModel.query()
  //   .where("id", dataId) // Utiliser `findById` au lieu de `where({ id: dataId })`
  //     .withGraphFetched("[service, category]").first(); // Charger les relations
  // }
  static async findById(dataId) {
    const review = await ServiceCategoryAssignementsModel
      .query()
      .findById(dataId)
      .withGraphFetched("[service, category]");
    return review;
  }

  static async deleteById(dataId) {
    return db(ServiceCategoryAssignementsModel.getTableName())
      .where({ id: dataId })
      .del();
  }
  
// static async updateById(dataId, data) {
//   db(ServiceCategoryAssignementsModel.getTableName())
//     .where({ id: dataId })
//     .update(data);
//     const updatedRecord = await findById(dataId);
//     return updatedRecord
// }
static async update(dataId, data) {
  try {
    // Mettre à jour la revue dans la base de données
    await ServiceCategoryAssignementsModel
      .query()
      .patchAndFetchById(dataId, data) // Mettre à jour et récupérer la revue modifiée
      .withGraphFetched("[service, category]"); // Charger les relations users et shops

    // Récupérer la revue mise à jour avec les relations
    const updatedCategoryAssignement = await ServiceCategoryAssignementsModel
      .query()
      .findById(dataId)
      .withGraphFetched("[service, category]"); // Charger les relations users et shops
    
    // Retourner la revue mise à jour avec ses relations
    return {
      message: "Category Assignement updated successfully.",
      data: updatedCategoryAssignement,
    };
  } catch (error) {
    console.error("Error updating Category Assignement:", error.message);
    console.error("Stack trace:", error.stack);
    throw new Error("An error occurred while updating the Category Assignement");
  }
}

}
module.exports = ServiceCategoryAssignementRepository;
