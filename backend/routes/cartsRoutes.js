// routes/cartsController.js
const express = require('express');
const router = express.Router();
const cartsController = require('../controllers/cartsController');
const authMiddleware = require('../middlewares/authMiddleware');

// Routes for Carts Items
router.get('/', authMiddleware, cartsController.getAllCarts);
router.get('/:id', authMiddleware, cartsController.getCartsById);
router.post('/', authMiddleware, cartsController.createCarts);
router.put('/:id', authMiddleware, cartsController.updateCarts);
router.delete('/:id', authMiddleware, cartsController.deleteCarts);
// router.get('/', cartsController.getAllCarts);
// router.get('/:id', cartsController.getCartsById);
// router.post('/', cartsController.createCarts);
// router.put('/:id', cartsController.updateCarts);
// router.delete('/:id', cartsController.deleteCarts);

module.exports = router;
