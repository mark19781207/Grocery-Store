// controllers/groceryItemController.js
const GroceryItem = require('../models/groceryItem');

// Get all grocery items
exports.getAllGroceryItems = async (req, res) => {
  try {
    const groceryItems = await GroceryItem.find();
    res.json(groceryItems);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new grocery item
exports.createGroceryItem = async (req, res) => {
  const newGroceryItem = new GroceryItem(req.body);
  try {
    const groceryItem = await newGroceryItem.save();
    res.status(201).json(groceryItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update a grocery item by ID
exports.updateGroceryItem = async (req, res) => {
  try {
    const updatedGroceryItem = await GroceryItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedGroceryItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a grocery item by ID
exports.deleteGroceryItem = async (req, res) => {
  try {
    await GroceryItem.findByIdAndRemove(req.params.id);
    res.status(204).end();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
