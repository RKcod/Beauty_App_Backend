const getReviewUseCase = require("../../core/usecases/GetReviewUseCase");
const getReviewsResource = require("../../interfaces/resources/reviewsResource");
const ReviewPaginateFilter = require("../../application/filters/ReviewsFilter");

module.exports = class GetReviewController {
    static async getAll(req, res) {
      try {
        const reviewPaginateFilter = new ReviewPaginateFilter(req.query);
        const review = await getReviewUseCase.getReviews(
            reviewPaginateFilter,
          req.query.page || 1,
          15
        );
        const reviewsFormatted = getReviewsResource.collection(review.data);
  
        return res.status(200).json({
          message: "successfully",
          data: reviewsFormatted,
          pagination: review.pagination,
        });
      } catch (error) {
        return res.status(400).json({ message: error.message });
      }
    }
  };
  