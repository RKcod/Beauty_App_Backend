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
  
      if (!staff) {
        throw new Error("Staff creation failed, no data returned");
      }
  
      console.log('Staff created:', staff);
  
      // Récupérer le staff avec ses relations (shop, etc.)
      const staffWithRelations = await StaffModel
        .query()
        .findById(staff.id)
        .withGraphFetched("shop");
    
      // Retourner le staff avec les relations
      return staffWithRelations;
  
    } catch (error) {
      console.error("Error creating staff:", error.message);
      console.error("Stack trace:", error.stack);
      return res.status(400).json({ message: error.message });
    }
  }
  
  
  /**
   * Récupérer tout un staff avec pagination
   */
  static async getAll(staffPaginateFilter, page, perPage) {
    let query = StaffModel.query()
      .select("*")
      .withGraphFetched("shop");

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
    .withGraphFetched("shop");
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
      .withGraphFetched("shop");
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
        .withGraphFetched("shop"); // Charger les relations users et shops

      // Récupérer la revue mise à jour avec les relations
      const updatedStaff = await StaffModel
        .query()
        .findById(staffId)
        .withGraphFetched("shop"); // Charger les relations users et shops
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
