const deleteReviewUseCase = require("../../core/usecases/DeleteReviewUseCase");

module.exports = class DeleteReviewController {
    static async delete(req, res) {
      const { id } = req.params;
  
      try {
        await deleteReviewUseCase.deleteReview(id);
        return res
          .status(200)
          .json({ message: "Review  deleted successfully", });
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };