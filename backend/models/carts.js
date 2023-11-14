// models/carts.js
const mongoose = require('../db');

const cartsSchema = new mongoose.Schema({
  customerName: String,
  products: Array,
  createdAt: String
});

const Carts = mongoose.model('carts', cartsSchema);

module.exports = Carts;
