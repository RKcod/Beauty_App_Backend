const express = require("express");
const router = express.Router();
// routers shop liens
const authMiddleware = require("../../../user/interfaces/middlewares/authMiddleware");
const CreateShopController = require("../controllers/CreateShopController");
const GetShopsController = require("../controllers/GetShopsController");
const GetShopByIdController = require("../controllers/GetShopByIdController");
const DeleteShopController = require("../controllers/DeleteShopController");
const updateShopController = require("../controllers/UpdateShopController");

// routers shop

router.post("/shop/create", authMiddleware, CreateShopController.create);
router.get("/shop/all", authMiddleware, GetShopsController.getAll);
router.get("/shop/:id", authMiddleware, GetShopByIdController.getById);
router.delete("/shop/:id", authMiddleware, DeleteShopController.delete);
router.put("/shop/:id", authMiddleware, updateShopController.update);

module.exports = router;
