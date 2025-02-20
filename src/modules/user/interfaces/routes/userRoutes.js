const express = require('express');
const AuthController = require('../controllers/AuthController');
const GetAllUsersController = require('../controllers/GetAllUsersController');
const DeleteUserController = require('../controllers/DeleteUserController');
const UpdateUserController = require('../controllers/UpdateUserController');
const FindUserController = require('../controllers/FindUserController');
const ForgotPasswordController = require('../controllers/ForgotPasswordController');
const ResetPasswordController = require('../controllers/ResetPasswordController');
const authMiddleware = require('../middlewares/authMiddleware');
const upload = require('../middlewares/multerMiddleware');

const router = express.Router();

router.post('/register', upload.single('image') , AuthController.register);
router.post('/login',AuthController.login);
router.post('/forgot-password', ForgotPasswordController.forgot);
router.post('/reset-password', ResetPasswordController.reset)


router.get('/users', authMiddleware, GetAllUsersController.getAll);
router.delete('/user/:id', authMiddleware, DeleteUserController.deleteUser);
router.put('/user/:id',  upload.single('image'), authMiddleware, UpdateUserController.update);
router.get('/finduser/:id', authMiddleware,FindUserController.find);


module.exports = router;
