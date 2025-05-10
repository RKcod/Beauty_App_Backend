const createReviewUseCase = require("../../core/usecases/CreateReviewUseCase");
const getReviewsResource = require("../../interfaces/resources/reviewsResource");
module.exports = class CreateReviewController { 
    static async create(req, res) {
        const reviewData = req.body;
        try {
          const review = await createReviewUseCase.createReview(reviewData);
          const reviewFormatted = getReviewsResource.toResource(review);
          return res
            .status(201)
            .json({ message: "Review created successfully", data: reviewFormatted });
        } catch (error) {
          return res.status(400).json({ message: error.message });
        }
      }
    }