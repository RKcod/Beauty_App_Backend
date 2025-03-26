const db = require("../../../../../knexInstance");
const StaffModel = require("../../infrastructure/models/StaffModel");
const paginationProvider = require("../../../../providers/PaginationProvider");
class StaffRepository {
  /**
   * Créer un staff
   */
  static async create(staffData) {
    try {
      // Insérer le staff dans la base de données
      const [staff] = await db(StaffModel.getTableName())
        .insert(staffData)
        .returning("*");

      // Récupérer la revue avec les relations (users et shops)
      const staffWithRelations = await StaffModel
        .query()
        .findById(staff.id)
        .withGraphFetched("[user, shop]"); // Charger les relations users et shops


      // Récupérer le staff sans les relations (juste pour tester)
      return staffWithRelations;
    } catch (error) {
      console.error("Error creating staff:", error.message);
      console.error("Stack trace:", error.stack);
      throw new Error("An error occurred while creating the staff");
    }
  }

  /**
   * Récupérer tout un staff avec pagination
   */
  static async getAll(staffPaginateFilter, page, perPage) {
    let query = StaffModel.query()
      .select("*")
      .withGraphFetched("[user, shop]");

    query = staffPaginateFilter.applyFilters(query);
    
    return paginationProvider.paginate(query, page, perPage);
  }
 
  /**
   * Trouver une staff par son ID
   */
  static async findById(staffId) {
   // return db(StaffModel.getTableName()).where({ id: staffId }).first();
    const review = await StaffModel
    .query()
    .findById(staffId)
    .withGraphFetched("[user, shop]");
    return review;

  }

  /**
   * Trouver un staff par son propriétaire (User)
   */
  static async findByOwnerId(userId) {
   // return db(StaffModel.getTableName()).where({ user_id: userId }).first();
    const staff = await StaffModel
      .query()
      .findById(userId)
      .withGraphFetched("[user, shop]");
    return staff;
  }

  /**
   * Supprimer un staff par son ID
   */
  static async deleteById(staffId) {
    return db(StaffModel.getTableName()).where({ id: staffId }).del();
  }
  
  static async update(staffId, staffData) {
    try {
      // Mettre à jour la revue dans la base de données
      await StaffModel
        .query()
        .patchAndFetchById(staffId, staffData) // Mettre à jour et récupérer la revue modifiée
        .withGraphFetched("[user, shop]"); // Charger les relations users et shops

      // Récupérer la revue mise à jour avec les relations
      const updatedStaff = await StaffModel
        .query()
        .findById(staffId)
        .withGraphFetched("[user, shop]"); // Charger les relations users et shops
        console.log('debut',updatedStaff);
      // Retourner la revue mise à jour avec ses relations
      return {
        message: "Staff updated successfully.",
        data: updatedStaff,
      };
    } catch (error) {
      console.error("Error updating Staff:", error.message);
      console.error("Stack trace:", error.stack);
      throw new Error("An error occurred while updating the staff");
    }
  }
}
module.exports = StaffRepository;
