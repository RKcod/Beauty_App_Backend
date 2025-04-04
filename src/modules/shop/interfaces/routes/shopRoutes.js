const express = require("express");
const router = express.Router();
const upload = require("../../../user/interfaces/middlewares/multerMiddleware"); // Ajout de l'upload

// routers shop liens
const authMiddleware = require("../../../user/interfaces/middlewares/authMiddleware");
const createShopController = require("../controllers/CreateShopController");
const getShopsController = require("../controllers/GetShopsController");
const findShopByIdController = require("../controllers/FindShopByIdController");
const deleteShopController = require("../controllers/DeleteShopController");
const updateShopController = require("../controllers/UpdateShopController");

// routers shop

router.post("/shop/create", authMiddleware, createShopController.create);
router.get("/shop/all", authMiddleware, getShopsController.getAll);
router.get("/shop/:id", authMiddleware, findShopByIdController.find);
router.delete("/shop/:id", authMiddleware, deleteShopController.delete);
router.put("/shop/:id", authMiddleware, updateShopController.update);
// Modifier la route pour gérer l'upload
router.post("/shop/create", authMiddleware, upload.single("image"), createShopController.create);
// Route de mise à jour d'un shop (avec upload d'image)
router.put("/shop/:id", authMiddleware, upload.single("image"), updateShopController.update);


module.exports = router;
