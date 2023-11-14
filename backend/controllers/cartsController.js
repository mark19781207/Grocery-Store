// controllers/cartsController.js
const Carts = require('../models/carts');

// Get all carts items
exports.getAllCarts = async (req, res) => {
  try {
    const carts = await Carts.find();
    res.json(carts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// Get a carts items by ID
exports.getCartsById = async (req, res) => {
  try {
    const carts = await Carts.findById(req.params.id);
    res.json(carts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// Create a new carts item
exports.createCarts = async (req, res) => {
  const newCarts = new Carts(req.body);
  try {
    const Carts = await newCarts.save();
    res.status(201).json(Carts);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update a carts by ID
exports.updateCarts = async (req, res) => {
  try {
    const updateCarts = await Carts.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updateCarts);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a carts item by ID
exports.deleteCarts = async (req, res) => {
  try {
    await Carts.findByIdAndRemove(req.params.id);
    res.status(204).end();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
