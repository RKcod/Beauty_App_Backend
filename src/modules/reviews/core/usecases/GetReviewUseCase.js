const reviewRepository = require("../../infrastructure/repositories/ReviewsRepository");

module.exports = class GetReviewUseCase {
  static async getReviews(reviewPaginateFilter, page = 1, perPage = 15) {
  return  await reviewRepository.getAll(
      reviewPaginateFilter,
      (page = 1),
      (perPage = 15)
    );
    

  }
};
