const express = require('express');
const CreateRoleController = require('../../interfaces/controllers/role/CreateRoleController');
const GetRolesController = require('../../interfaces/controllers/role/GetRolesController');
const FindRoleController = require('../../interfaces/controllers/role/FindRoleController');
const UpdateRoleController = require('../../interfaces/controllers/role/UpdateRoleController');
const DeleteRoleController = require('../../interfaces/controllers/role/DeleteRoleController');
const authMiddleware = require('../middlewares/authMiddleware');


const router = express.Router();

router.post('/role', authMiddleware, CreateRoleController.create);
router.get('/roles', authMiddleware, GetRolesController.getRoles);
router.get('/role/:id', authMiddleware, FindRoleController.find);
router.put('/role/:id', authMiddleware, UpdateRoleController.update);
router.delete('/role/:id', authMiddleware, DeleteRoleController.delete);


module.exports = router;
