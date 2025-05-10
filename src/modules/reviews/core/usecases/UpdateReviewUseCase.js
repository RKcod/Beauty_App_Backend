const reviewRepository = require("../../infrastructure/repositories/ReviewsRepository");
// const reviewEntitie = require("../../entities/Staff");


module.exports = class UpdateReviewUseCase {
  static async updateReview(id, data) {
    const review = await reviewRepository.findById(id);
    if (!review) {
      throw new Error("This review id does not exist");
    }
    // const staffFormated = new StaffEntitie(data);
    const updateReviewdata = await reviewRepository.update(id, data);
    return updateReviewdata;
  }
};
