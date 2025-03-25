const express = require("express");

const router = express.Router();

const authMiddleware = require("../../../user/interfaces/middlewares/authMiddleware");

const createServiceController = require("../controllers/services/CreateServiceController");
const getServiceController = require("../controllers/services/GetServiceController");
const findServiceController = require("../controllers/services/FindServiceByController");
const deleteServiceController = require("../controllers/services/DeleteServiceController");
const updateServiceController = require("../controllers/services/UpdateServiceController");


// routers services

router.post("/service", authMiddleware, createServiceController.create);
router.get("/services", authMiddleware, getServiceController.getAll);
router.get("/service/:id", authMiddleware, findServiceController.find);
router.delete("/service/:id", authMiddleware, deleteServiceController.delete);
router.put('/service/:id', authMiddleware, updateServiceController.update);
module.exports = router;