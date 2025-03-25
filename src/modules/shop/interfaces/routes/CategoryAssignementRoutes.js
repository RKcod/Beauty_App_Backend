const express = require("express");

const router = express.Router();

// routers serviceCategoryAssignement liens
const authMiddleware = require("../../../user/interfaces/middlewares/authMiddleware");

const createCategoryAssignementController = require("../controllers/categoryAssignement/CreateCategoryAssignementController");
const getCategoryAssignementController = require("../controllers/categoryAssignement/GetCategoryAssignementController");
const findCategoryAssignementByIdController = require("../controllers/categoryAssignement/FindCategoryAssignementByIdController");
const DeleteCategoryAssignementController = require("../controllers/categoryAssignement/DeleteCategoryAssignementController");
const UpdateCategoryAssignementController = require("../controllers/categoryAssignement/UpdateCategoryAssignementController")

// routers serviceCategoryAssignement 
router.post("/categoryAssign/create", authMiddleware, createCategoryAssignementController.create);
router.get("/categoryAssign/all", authMiddleware, getCategoryAssignementController.getAll);
router.get("/categoryAssign/:id", authMiddleware, findCategoryAssignementByIdController.find);
router.delete("/categoryAssign/:id", authMiddleware, DeleteCategoryAssignementController.delete);
router.put('/categoryAssign/:id', authMiddleware, UpdateCategoryAssignementController.update);

module.exports = router;
