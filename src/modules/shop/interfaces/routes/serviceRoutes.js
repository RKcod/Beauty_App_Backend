const express = require("express");

const router = express.Router();

const authMiddleware = require("../../../user/interfaces/middlewares/authMiddleware");

const createServiceController = require("../controllers/services/CreateServicesController");
const getServiceController = require("../controllers/services/GetServicesController");
const findServiceController = require("../controllers/services/GetServicesByController");
const deleteServiceController = require("../controllers/services/DeleteServicesController");
const updateServiceController = require("../controllers/services/UpdateServiceController");


// routers services

router.post("/service", authMiddleware, createServiceController.create);
router.get("/services", authMiddleware, getServiceController.getAll);
router.get("/service/:id", authMiddleware, findServiceController.getById);
router.delete("/service/:id", authMiddleware, deleteServiceController.delete);
router.put('/service/:id', authMiddleware, updateServiceController.update);
module.exports = router;