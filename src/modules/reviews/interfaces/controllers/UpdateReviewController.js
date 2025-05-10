const updateReviewUseCase = require("../../core/usecases/UpdateReviewUseCase");
const getReviewsResource = require("../../interfaces/resources/reviewsResource");
module.exports = class UpdateReviewController {
    static async update(req, res) {
      try {
        const { id } = req.params;
  
        const updateReview = await updateReviewUseCase.updateReview(id, req.body);
        
        const review = updateReview;
        
    
        return res.status(201).json({
          message: " review updated successfully.",
          data:review,
        });
      } catch (error) {
        return res.status(400).json({ error: error.message });
      }
    }
  };
  