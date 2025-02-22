const express = require("express");
const authMiddleware = require("../../../user/interfaces/middlewares/authMiddleware");
const createStaffController = require("../controllers/CreateStaffController");
const getStaffController = require("../controllers/GetStaffController");
const findStaffController = require("../controllers/GetStaffByIdController");
const deleteStaffController = require("../controllers/DeleteStaffController");

const router = express.Router();

router.post("/staff", authMiddleware, createStaffController.create);
router.get("/staffs", authMiddleware, getStaffController.getAll);
router.get("/staff/:id", authMiddleware, findStaffController.find);
router.delete("/staff/:id", authMiddleware, deleteStaffController.delete);
// router.put('/permission/:id', authMiddleware, UpdatePermissionController.update);

module.exports = router;
