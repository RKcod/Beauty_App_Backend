const ServiceCategoryAssignementsModel = require("../models/ServiceCategoryAssignementsModel");
const ServiceCategoryModel = require("../models/ServiceCategoryModel");
const db = require("../../../../../knexInstance");
const paginationProvider = require("../../../../providers/PaginationProvider");

class ServiceCategoryAssignementRepository {

  static async create(data) {
    try {
      // Insérer la revue dans la base de données
      const [serviceCategory] = await db(
        ServiceCategoryAssignementsModel.getTableName()
      )
        .insert(data)
        .returning("*");

      // Récupérer la revue avec les relations (users et shops)
      const serviceCategoryWithRelations =
        await ServiceCategoryAssignementsModel.query()
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
    let query = ServiceCategoryModel.query()
      .select("*")
      .withGraphFetched("services");

    query = dataPaginateFilter.applyFilters(query);

    return paginationProvider.paginate(query, page, perPage);
  }

  
  static async findById(dataId) {
    const review = await ServiceCategoryModel.query()
      .findById(dataId)
      .withGraphFetched("services");
    return review;
  }

  static async deleteById(dataId) {
    return db(ServiceCategoryAssignementsModel.getTableName())
      .where({ id: dataId })
      .del();
  }

  // static async update(dataId, data) {
  //   try {
  //     // Mettre à jour la revue dans la base de données
  //     await ServiceCategoryAssignementsModel.query()
  //       .patchAndFetchById(dataId, data) // Mettre à jour et récupérer la revue modifiée
  //       .withGraphFetched("[service, category]"); // Charger les relations users et shops

  //     // Récupérer la revue mise à jour avec les relations
  //     const updatedCategoryAssignement =
  //       await ServiceCategoryAssignementsModel.query()
  //         .findById(dataId)
  //         .withGraphFetched("[service, category]"); // Charger les relations users et shops

  //     // Retourner la revue mise à jour avec ses relations
  //     return {
  //       message: "Category Assignement updated successfully.",
  //       data: updatedCategoryAssignement,
  //     };
  //   } catch (error) {
  //     console.error("Error updating Category Assignement:", error.message);
  //     console.error("Stack trace:", error.stack);
  //     throw new Error(
  //       "An error occurred while updating the Category Assignement"
  //     );
  //   }
  // }
  static async removeServiceFromCategory(serviceId, categoryId) {
    try {
      // Vérifier si l'assignation existe
      const existingAssignment = await ServiceCategoryAssignementsModel.query()
        .where("service_id", serviceId)
        .where("category_id", categoryId)
        .first();

      if (!existingAssignment) {
        throw new Error(
          "L'assignation du service à cette catégorie n'existe pas."
        );
      }

      // Supprimer l'assignation
      await ServiceCategoryAssignementsModel.query()
        .where("service_id", serviceId)
        .where("category_id", categoryId)
        .del();

      return { message: "Service supprimé de la catégorie avec succès." };
    } catch (error) {
      console.error("Erreur lors de la suppression :", error.message);
      throw new Error("Une erreur est survenue lors de la suppression.");
    }
  }
  static async findByServiceAndCategory(serviceId, categoryId) {
    return await ServiceCategoryAssignementsModel.query()
      .where({ service_id: serviceId, category_id: categoryId })
      .first();
  }

  static async deleteByServiceAndCategory(serviceId, categoryId) {
    return await ServiceCategoryAssignementsModel.query()
      .where({ service_id: serviceId, category_id: categoryId })
      .delete();
  }

  static async updateServiceId(oldServiceId, categoryId, newServiceId) {
    return await db("service_category_assignements")
      .where({ service_id: oldServiceId, category_id: categoryId })
      .update({ service_id: newServiceId })
      .returning("*");
  }
}
module.exports = ServiceCategoryAssignementRepository;
