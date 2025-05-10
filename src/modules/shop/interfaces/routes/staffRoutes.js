const express = require("express");

const router = express.Router();

// routers staff liens
const authMiddleware = require("../../../user/interfaces/middlewares/authMiddleware");

const createStaffController = require("../controllers/staff/CreateStaffController");
const getStaffController = require("../controllers/staff/GetStaffController");
const findStaffController = require("../controllers/staff/FindStaffByIdController");
const deleteStaffController = require("../controllers/staff/DeleteStaffController");
const updateStaffController = require("../controllers/staff/UpdateStaffController");

// routers staffs
router.post("/staff", authMiddleware, createStaffController.create);
router.get("/staffs", authMiddleware, getStaffController.getAll);
router.get("/staff/:id", authMiddleware, findStaffController.find);
router.delete("/staff/:id", authMiddleware, deleteStaffController.delete);
router.put("/staff/:id", authMiddleware, updateStaffController.update);
module.exports = router;
