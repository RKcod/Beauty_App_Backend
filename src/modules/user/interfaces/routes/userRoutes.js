const express = require('express');
const AuthController = require('../controllers/AuthController');
const GetAllUsersController = require('../controllers/GetAllUsersController');
const DeleteUserController = require('../controllers/DeleteUserController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register',AuthController.register);
router.post('/login',AuthController.login);


router.get('/users', authMiddleware, GetAllUsersController.getAll);
router.delete('/user/:id', authMiddleware , DeleteUserController.deleteUser)

module.exports = router;
