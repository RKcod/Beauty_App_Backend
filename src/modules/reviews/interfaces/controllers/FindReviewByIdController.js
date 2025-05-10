const findReviewUseCase = require("../../core/usecases/FindReviewByIdUseCase");
const getReviewsResource = require("../resources/reviewsResource");

module.exports = class FindReviewByIdController {
    static async find(req, res) {
      try {
        const { id } = req.params;
        const review = await findReviewUseCase.findReview(id);
        const reviewsFormatted = getReviewsResource.toResource(review);
        return res
          .status(200)
          .json({ message: "successfully", data: reviewsFormatted });
      } catch (error) {
        return res.status(404).json({ message: error.message });
      }
    }
  };