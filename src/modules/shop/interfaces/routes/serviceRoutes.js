const express = require("express");
const upload = require("../../../user/interfaces/middlewares/multerMiddleware"); // Ajout de l'upload

const router = express.Router();

const authMiddleware = require("../../../user/interfaces/middlewares/authMiddleware");

const createServiceController = require("../controllers/services/CreateServiceController");
const getServiceController = require("../controllers/services/GetServiceController");
const findServiceController = require("../controllers/services/FindServiceByController");
const deleteServiceController = require("../controllers/services/DeleteServiceController");
const updateServiceController = require("../controllers/services/UpdateServiceController");


// routers services

// router.post("/service", authMiddleware, createServiceController.create);
router.get("/services", authMiddleware, getServiceController.getAll);
router.get("/service/:id", authMiddleware, findServiceController.find);
router.delete("/service/:id", authMiddleware, deleteServiceController.delete);
// router.put('/service/:id', authMiddleware, updateServiceController.update);
// Modifier la route pour gérer l'upload
router.post("/service", authMiddleware, upload.single("image"), createServiceController.create);
// Route de mise à jour d'un shop (avec upload d'image)
router.put("/service/:id", authMiddleware, upload.single("image"), updateServiceController.update);

module.exports = router;