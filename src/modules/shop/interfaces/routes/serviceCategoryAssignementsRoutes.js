const express = require("express");

const router = express.Router();
const authMiddleware = require("../../../user/interfaces/middlewares/authMiddleware");
const CreateCategoryAssignementsController = require("../controllers/CreateCategoryAssignementsController");
const GetCategoryAssignementsController = require("../controllers/GetCategoryAssignementsController");
const GetCategoryAssignementsByIdController = require("../controllers/GetCategoryAssignementsByIdController");
const DeleteCategoryAssignementsController = require("../controllers/DeleteCategoryAssignementsController");

router.post("/categoryAssign/create", authMiddleware, CreateCategoryAssignementsController.create);
router.get("/categoryAssign/all", authMiddleware, GetCategoryAssignementsController.getAll);
router.get("/categoryAssign/:id", authMiddleware, GetCategoryAssignementsByIdController.getById);
router.delete("/categoryAssign/:id", authMiddleware, DeleteCategoryAssignementsController.delete);

module.exports = router;
