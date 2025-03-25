const db = require("../../../../../knexInstance");
const reviewsModel = require("../../infrastructure/models/ReviewsModel");
const paginationProvider = require("../../../../providers/PaginationProvider");



module.exports = class ReviewsRepository {
 /*** Créer un review */
    static async create(reviewData) {
        return db(reviewsModel.getTableName())
        .insert(reviewData)
        .returning("*")
        .debug();
    }
 /*** Récupérer tout un review avec pagination */
  static async getAll(reviewPaginateFilter, page, perPage) {
    let query = reviewsModel.query().select("*").withGraphFetched("[users]");
    query = reviewPaginateFilter.applyFilters(query);
    return paginationProvider.paginate(query, page, perPage);
  }
 /*** Trouver une review par son ID  */
  static async findById(reviewId) {
    return db(reviewsModel.getTableName()).where({ id: reviewId }).first();
  }
 /*** Supprimer un review par son ID */
   static async deleteById(reviewId) {
    return db(reviewsModel.getTableName()).where({ id: reviewId }).del();
  }
  static async updateById(dataId, data) {
    return db(reviewsModel.getTableName())
      .where({ id: dataId })
      .update(data)
      .returning("*");
  }

}
