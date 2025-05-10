const express = require("express");
const router = express.Router();
const authMiddleware = require("../../../user/interfaces/middlewares/authMiddleware");

const createReviewController = require("../controllers/CreateReviewController");
const getReviewController = require("../controllers/GetReviewController");
const findReviewController = require("../controllers/FindReviewByIdController");
const deleteReviewController = require("../controllers/DeleteReviewController");
const updateReviewController = require("../controllers/UpdateReviewController");

router.post("/review", authMiddleware, createReviewController.create);
router.get("/reviews", authMiddleware, getReviewController.getAll);
router.get("/review/:id", authMiddleware, findReviewController.find);
router.delete("/review/:id", authMiddleware, deleteReviewController.delete);
router.put("/review/:id", authMiddleware, updateReviewController.update);
module.exports = router;

