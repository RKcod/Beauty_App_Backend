const express = require("express");

const router = express.Router();

// routers serviceCategoryAssignement liens
const authMiddleware = require("../../../user/interfaces/middlewares/authMiddleware");

const CreateCategoryAssignementsController = require("../controllers/categoryAssignement/CreateCategoryAssignementsController");
const GetCategoryAssignementsController = require("../controllers/categoryAssignement/GetCategoryAssignementsController");
const GetCategoryAssignementsByIdController = require("../controllers/categoryAssignement/GetCategoryAssignementsByIdController");
const DeleteCategoryAssignementsController = require("../controllers/categoryAssignement/DeleteCategoryAssignementsController");
const UpdateCategoryAssignementController = require("../controllers/categoryAssignement/UpdateCategoryAssignementController")

// routers serviceCategoryAssignement 
router.post("/categoryAssign/create", authMiddleware, CreateCategoryAssignementsController.create);
router.get("/categoryAssign/all", authMiddleware, GetCategoryAssignementsController.getAll);
router.get("/categoryAssign/:id", authMiddleware, GetCategoryAssignementsByIdController.getById);
router.delete("/categoryAssign/:id", authMiddleware, DeleteCategoryAssignementsController.delete);
router.put('/categoryAssign/:id', authMiddleware, UpdateCategoryAssignementController.update);

module.exports = router;
