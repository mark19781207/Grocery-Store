// routes/groceryItemRoutes.js
const express = require('express');
const router = express.Router();
const groceryItemController = require('../controllers/groceryItemController');

// Routes for Grocery Items
router.get('/', groceryItemController.getAllGroceryItems);
router.post('/', groceryItemController.createGroceryItem);
router.put('/:id', groceryItemController.updateGroceryItem);
router.delete('/:id', groceryItemController.deleteGroceryItem);

module.exports = router;
