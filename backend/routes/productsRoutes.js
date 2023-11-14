// routes/productsRoutes.js
const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const authMiddleware = require('../middlewares/authMiddleware');

// Routes for orders Items
router.get('/', authMiddleware, productsController.getAllProducts);
router.get('/:id', authMiddleware, productsController.getProductsById);
router.post('/', authMiddleware, productsController.createProducts);
router.put('/:id', authMiddleware, productsController.updateProducts);
router.delete('/:id', authMiddleware, productsController.deleteProducts);
// router.get('/', productsController.getAllProducts);
// router.get('/:id', productsController.getProductsById);
// router.post('/', productsController.createProducts);
// router.put('/:id', productsController.updateProducts);
// router.delete('/:id', productsController.deleteProducts);

module.exports = router;
