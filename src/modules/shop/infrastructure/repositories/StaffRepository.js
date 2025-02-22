const db = require("../../../../../knexInstance");
const StaffModel = require("../../infrastructure/models/StaffModel");
const paginationProvider = require("../../../../providers/PaginationProvider");
class StaffRepository {
  /**
   * Créer un staff
   */

  static async create(staffData) {
    return db(StaffModel.getTableName())
      .insert(staffData)
      .returning("*")
      .debug();
  }
  /**
   * Récupérer tout un staff avec pagination
   */
  static async getAll(staffPaginateFilter, page, perPage) {
    let query = StaffModel.query()
      .select("*")
      .withGraphFetched("[users, shops]");

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
   * Mettre à jour un staff par son ID
   */
  static async updateById(staffId, staffData) {
    return db(StaffModel.getTableName())
      .where({ id: staffId })
      .update(staffData)
      .returning("*");
  }
  /**
   * Supprimer un staff par son ID
   */
  static async deleteById(staffId) {
    return db(StaffModel.getTableName()).where({ id: staffId }).del();
  }
}
module.exports = StaffRepository;
