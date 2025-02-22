const express = require("express");
const authMiddleware = require("../../../user/interfaces/middlewares/authMiddleware");
const createServiceCategoryController = require("../controllers/CreateServiceCategoryController");
const getServiceCategoryController = require("../controllers/GetServiceCategoryController");
const findServiceCategoryController = require("../controllers/GetServiceCategoryByIdController");
const deleteServiceCategoryController = require("../controllers/DeleteServiceCategoryController");

const router = express.Router();

router.post("/serviceCategory",authMiddleware,createServiceCategoryController.create);
router.get( "/serviceCategories",authMiddleware,getServiceCategoryController.getAll);
router.get( "/serviceCategory/:id",authMiddleware,findServiceCategoryController.getById);
router.delete("/serviceCategory/:id",authMiddleware,deleteServiceCategoryController.delete);
// router.put('/permission/:id', authMiddleware, UpdatePermissionController.update);

module.exports = router
