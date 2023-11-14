// models/groceryItem.js
const mongoose = require('../db');

const productsSchema = new mongoose.Schema({
  ProductCode: String,
  ProductName: String,
  ProductQuantity: Number,
  Product_price: Number,
});

const Products = mongoose.model('products', productsSchema);

module.exports = Products;
