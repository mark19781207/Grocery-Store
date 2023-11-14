// routes/ordersRoutes.js
const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/ordersController');
const authMiddleware = require('../middlewares/authMiddleware');

// Routes for orders Items
router.get('/', authMiddleware, ordersController.getAllOrders);
router.get('/:id', authMiddleware, ordersController.getOrderById);
router.post('/', authMiddleware, ordersController.createOrders);
router.put('/:id', authMiddleware, ordersController.updateOrders);
router.delete('/:id', authMiddleware, ordersController.deleteOrders);
// router.get('/', ordersController.getAllOrders);
// router.get('/:id', ordersController.getOrderById);
// router.post('/', ordersController.createOrders);
// router.put('/:id', ordersController.updateOrders);
// router.delete('/:id', ordersController.deleteOrders);

module.exports = router;
