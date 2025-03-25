const reviewRepository = require("../../infrastructure/repositories/ReviewsRepository");

module.exports = class FindReviewByIdUseCase {
  static async findReview(id) {
    const review = await reviewRepository.findById(id);
    if (!review) {
      throw new Error("This review does not exist");
    }
    return staff;
  }
};
