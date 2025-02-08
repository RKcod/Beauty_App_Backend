const express = require('express');

const router = express.Router();
const authMiddleware = require('../../../user/interfaces/middlewares/authMiddleware');
const CreateShopController = require('../controllers/CreateShopController');


router.post('/shop/create', authMiddleware, CreateShopController.create);

module.exports = router;