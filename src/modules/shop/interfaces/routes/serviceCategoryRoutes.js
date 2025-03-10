const express = require("express");

const router = express.Router();
  // routers serviceCategories liens
  const authMiddleware = require("../../../user/interfaces/middlewares/authMiddleware");

const createServiceCategoryController = require("../controllers/serviceCategory/CreateServiceCategoryController");
const getServiceCategoryController = require("../controllers/serviceCategory/GetServiceCategoryController");
const findServiceCategoryController = require("../controllers/serviceCategory/GetServiceCategoryByIdController");
const deleteServiceCategoryController = require("../controllers/serviceCategory/DeleteServiceCategoryController");
const updateServiceCategoryController = require("../controllers/serviceCategory/UpdateServiceCategoryController");


// routers serviceCategories
router.post("/serviceCategory",authMiddleware,createServiceCategoryController.create);
router.get( "/serviceCategories",authMiddleware,getServiceCategoryController.getAll);
router.get( "/serviceCategory/:id",authMiddleware,findServiceCategoryController.getById);
router.delete("/serviceCategory/:id",authMiddleware,deleteServiceCategoryController.delete);
router.put('/serviceCategory/:id', authMiddleware, updateServiceCategoryController.update);

// 
module.exports = router;