// controllers/productsController.js
const Products = require('../models/products');

// Get all products items
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Products.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// Get all products items by ID
exports.getProductsById = async (req, res) => {
  try {
    const products = await Products.findById(req.params.id);
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new products item
exports.createProducts = async (req, res) => {
  const newProducts = new Products(req.body);
  try {
    const Products = await newProducts.save();
    res.status(201).json(Products);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update a products by ID
exports.updateProducts = async (req, res) => {
  try {
    const updateProducts = await Products.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updateProducts);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a products item by ID
exports.deleteProducts = async (req, res) => {
  try {
    await Products.findByIdAndRemove(req.params.id);
    res.status(204).end();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
