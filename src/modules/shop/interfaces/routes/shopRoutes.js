const express = require("express");

const router = express.Router();
// routers shop liens
const authMiddleware = require("../../../user/interfaces/middlewares/authMiddleware");
const CreateShopController = require("../controllers/CreateShopController");
const GetShopsController = require("../controllers/GetShopsController");
const GetShopByIdController = require("../controllers/GetShopByIdController");
const DeleteShopController = require("../controllers/DeleteShopController");


// routers staff liens
const createStaffController = require("../controllers/CreateStaffController");
const getStaffController = require("../controllers/GetStaffController");
const findStaffController = require("../controllers/GetStaffByIdController");
const deleteStaffController = require("../controllers/DeleteStaffController");



// routers service liens

const createServiceController = require("../controllers/CreateServicesController");
const getServiceController = require("../controllers/GetServicesController");
const findServiceController = require("../controllers/GetServicesByController");
const deleteServiceController = require("../controllers/DeleteServicesController");


// routers serviceCategories liens
const createServiceCategoryController = require("../controllers/CreateServiceCategoryController");
const getServiceCategoryController = require("../controllers/GetServiceCategoryController");
const findServiceCategoryController = require("../controllers/GetServiceCategoryByIdController");
const deleteServiceCategoryController = require("../controllers/DeleteServiceCategoryController");


// routers serviceCategoryAssignement liens
const CreateCategoryAssignementsController = require("../controllers/CreateCategoryAssignementsController");
const GetCategoryAssignementsController = require("../controllers/GetCategoryAssignementsController");
const GetCategoryAssignementsByIdController = require("../controllers/GetCategoryAssignementsByIdController");
const DeleteCategoryAssignementsController = require("../controllers/DeleteCategoryAssignementsController");


// routers shop

router.post("/shop/create", authMiddleware, CreateShopController.create);
router.get("/shop/all", authMiddleware, GetShopsController.getAll);
router.get("/shop/:id", authMiddleware, GetShopByIdController.getById);
router.delete("/shop/:id", authMiddleware, DeleteShopController.delete);

// routers staffs
router.post("/staff", authMiddleware, createStaffController.create);
router.get("/staffs", authMiddleware, getStaffController.getAll);
router.get("/staff/:id", authMiddleware, findStaffController.find);
router.delete("/staff/:id", authMiddleware, deleteStaffController.delete);
// router.put('/permission/:id', authMiddleware, UpdatePermissionController.update);


// routers services

router.post("/service", authMiddleware, createServiceController.create);
router.get("/services", authMiddleware, getServiceController.getAll);
router.get("/service/:id", authMiddleware, findServiceController.getById);
router.delete("/service/:id", authMiddleware, deleteServiceController.delete);
// router.put('/permission/:id', authMiddleware, UpdatePermissionController.update);


// routers serviceCategories
router.post("/serviceCategory",authMiddleware,createServiceCategoryController.create);
router.get( "/serviceCategories",authMiddleware,getServiceCategoryController.getAll);
router.get( "/serviceCategory/:id",authMiddleware,findServiceCategoryController.getById);
router.delete("/serviceCategory/:id",authMiddleware,deleteServiceCategoryController.delete);
// 

// routers serviceCategoryAssignement 
router.post("/categoryAssign/create", authMiddleware, CreateCategoryAssignementsController.create);
router.get("/categoryAssign/all", authMiddleware, GetCategoryAssignementsController.getAll);
router.get("/categoryAssign/:id", authMiddleware, GetCategoryAssignementsByIdController.getById);
router.delete("/categoryAssign/:id", authMiddleware, DeleteCategoryAssignementsController.delete);




module.exports = router;
