// models/groceryItem.js
const mongoose = require('../db');

const ordersSchema = new mongoose.Schema({
  OrderNo: String,
  OrderDate: String,
  CustNo: Number,
  ProductCode: Number,
  ProductName: String,
  Quantity: Number,
  Price: Number,
  Total: Number,
  ModeOfPayment: String

});

const Orders = mongoose.model('orders', ordersSchema);

module.exports = Orders;
