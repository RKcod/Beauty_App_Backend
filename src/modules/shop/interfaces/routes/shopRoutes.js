const express = require("express");

const router = express.Router();
const authMiddleware = require("../../../user/interfaces/middlewares/authMiddleware");
const CreateShopController = require("../controllers/CreateShopController");
const GetShopsController = require("../controllers/GetShopsController");
const GetShopByIdController = require("../controllers/GetShopByIdController");
const DeleteShopController = require("../controllers/DeleteShopController");

router.post("/shop/create", authMiddleware, CreateShopController.create);
router.get("/shop/all", authMiddleware, GetShopsController.getAll);
router.get("/shop/:id", authMiddleware, GetShopByIdController.getById);
router.delete("/shop/:id", authMiddleware, DeleteShopController.delete);

module.exports = router;
