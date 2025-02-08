const express = require('express');

const router = express.Router();
const authMiddleware = require('../../../user/interfaces/middlewares/authMiddleware');
const CreateShopController = require('../controllers/CreateShopController');
const GetShopsController = require('../controllers/GetShopsController');


router.post('/shop/create', authMiddleware, CreateShopController.create);
router.get('/shop/all', authMiddleware, GetShopsController.getAll);

module.exports = router;