const express = require("express");
const authMiddleware = require("../../../user/interfaces/middlewares/authMiddleware");
const createServiceController = require("../controllers/CreateServicesController");
const getServiceController = require("../controllers/GetServicesController");
const findServiceController = require("../controllers/GetServicesByController");
const deleteServiceController = require("../controllers/DeleteServicesController");

const router = express.Router();

router.post("/service", authMiddleware, createServiceController.create);
router.get("/services", authMiddleware, getServiceController.getAll);
router.get("/service/:id", authMiddleware, findServiceController.getById);
router.delete("/service/:id", authMiddleware, deleteServiceController.delete);
// router.put('/permission/:id', authMiddleware, UpdatePermissionController.update);

module.exports = router;
