const ReviewsRepository = require("../../infrastructure/repositories/ReviewsRepository");

module.exports = class DeleteReviewUseCase {
  static async deleteReview(id) {
    const review = await ReviewsRepository.findById(id);

    if (!review) {
      throw new Error("Review not found");
    }

    return await ReviewsRepository.deleteById(id);
  }
};
