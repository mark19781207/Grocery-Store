// models/groceryItem.js
const mongoose = require('../db');

const groceryItemSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  quantity: Number,
});

const GroceryItem = mongoose.model('GroceryItem', groceryItemSchema);

module.exports = GroceryItem;
