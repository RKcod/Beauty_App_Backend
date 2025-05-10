const db = require("../../../../../knexInstance");
const reviewsModel = require("../../infrastructure/models/ReviewsModel");
const paginationProvider = require("../../../../providers/PaginationProvider");

module.exports = class ReviewsRepository {
  /*** Créer un review */

  static async create(reviewData) {
    try {
      // Insérer la revue dans la base de données
      const [review] = await db(reviewsModel.getTableName())
        .insert(reviewData)
        .returning("*");

      // Récupérer la revue avec les relations (users et shops)
      const reviewWithRelations = await reviewsModel
        .query()
        .findById(review.id)
        .withGraphFetched("[users, shops]"); // Charger les relations users et shops

      // Retourner la revue avec les relations peuplées
      return reviewWithRelations;
    } catch (error) {
      console.error("Error creating review:", error.message);
      console.error("Stack trace:", error.stack);
      throw new Error("An error occurred while creating the review");
    }
  }
  /*** Récupérer tout un review avec pagination */
  static async getAll(reviewPaginateFilter, page, perPage) {
    let query = reviewsModel
      .query()
      .select("*")
      .withGraphFetched("[users, shops]");
    query = reviewPaginateFilter.applyFilters(query);

    return paginationProvider.paginate(query, page, perPage);
  }
  /*** Trouver une review par son ID  */
  static async findById(reviewId) {
    const review = await reviewsModel
      .query()
      .findById(reviewId)
      .withGraphFetched("[users, shops]");
    return review;
  }
  /*** Supprimer un review par son ID */
  static async deleteById(reviewId) {
    return db(reviewsModel.getTableName()).where({ id: reviewId }).del();
  }
  static async update(reviewId, reviewData) {
    try {
      // Mettre à jour la revue dans la base de données
      await reviewsModel
        .query()
        .patchAndFetchById(reviewId, reviewData) // Mettre à jour et récupérer la revue modifiée
        .withGraphFetched("[users, shops]"); // Charger les relations users et shops

      // Récupérer la revue mise à jour avec les relations
      const updatedReview = await reviewsModel
        .query()
        .findById(reviewId)
        .withGraphFetched("[users, shops]"); // Charger les relations users et shops
      
      // Retourner la revue mise à jour avec ses relations
      return {
        message: "Review updated successfully.",
        data: updatedReview,
      };
    } catch (error) {
      console.error("Error updating review:", error.message);
      console.error("Stack trace:", error.stack);
      throw new Error("An error occurred while updating the review");
    }
  }
 
};
