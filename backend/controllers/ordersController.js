// controllers/ordersController.js
const Orders = require('../models/orders');

// Get all orders items
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Orders.find();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a order items  by ID
exports.getOrderById = async (req, res) => {
  try {
    const orders = await Orders.findById(req.params.id);

    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new orders item
exports.createOrders = async (req, res) => {
  const newOrders = new Orders(req.body);
  try {
    const Orders = await newOrders.save();
    res.status(201).json(Orders);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update a orders by ID
exports.updateOrders = async (req, res) => {
  try {
    const updateOrders = await Orders.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updateOrders);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a orders item by ID
exports.deleteOrders = async (req, res) => {
  try {
    await Orders.findByIdAndRemove(req.params.id);
    res.status(204).end();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
