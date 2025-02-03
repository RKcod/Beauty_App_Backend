const express = require('express');
const CreatePermissionController = require('../../interfaces/controllers/permission/CreatePermissionController');
const GetPermissionsController = require('../../interfaces/controllers/permission/GetPermissionsController');
const FindPermissionController = require('../../interfaces/controllers/permission/FindPermissionController');
const UpdatePermissionController = require('../../interfaces/controllers/permission/UpdatePermissionController');
const DeletePermissionController = require('../../interfaces/controllers/permission/DeletePermissionController');
const authMiddleware = require('../middlewares/authMiddleware');


const router = express.Router();

router.post('/permission', authMiddleware, CreatePermissionController.create);
router.get('/permissions', authMiddleware, GetPermissionsController.getPermissions);
router.get('/permission/:id', authMiddleware, FindPermissionController.find);
router.put('/permission/:id', authMiddleware, UpdatePermissionController.update);
router.delete('/permission/:id', authMiddleware, DeletePermissionController.delete);


module.exports = router;
