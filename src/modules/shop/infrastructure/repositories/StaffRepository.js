const db = require("../../../../../knexInstance");
const StaffModel = require("../../infrastructure/models/StaffModel");
const paginationProvider = require("../../../../providers/PaginationProvider");
class StaffRepository {
  /**
   * Créer un staff
   */

  // static async create(staffData) {
  //   return db(StaffModel.getTableName())
  //     .insert(staffData)
  //     .returning("*")
  //     .debug();
  // }

  static async create(staffData) {
    try {
      // Insérer le staff dans la base de données
      const [staff] = await db(StaffModel.getTableName())
        .insert(staffData)
        .returning("*");

      // Récupérer le staff sans les relations (juste pour tester)
      return staff;
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
    let query = StaffModel.query().select("*").withGraphFetched("[users]");

    query = staffPaginateFilter.applyFilters(query);

    return paginationProvider.paginate(query, page, perPage);
  }
  /**
   * Trouver une staff par son ID
   */
  static async findById(staffId) {
    return db(StaffModel.getTableName()).where({ id: staffId }).first();
  }

  /**
   * Trouver un staff par son propriétaire (User)
   */
  static async findByOwnerId(userId) {
    return db(StaffModel.getTableName()).where({ user_id: userId }).first();
  }

  /**
   * Supprimer un staff par son ID
   */
  static async deleteById(staffId) {
    return db(StaffModel.getTableName()).where({ id: staffId }).del();
  }
  static async updateById(dataId, data) {
    return db(StaffModel.getTableName())
      .where({ id: dataId })
      .update(data)
      .returning("*");
  }
}
module.exports = StaffRepository;
