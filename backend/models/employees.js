// models/groceryItem.js
const mongoose = require('../db');

const employeesSchema = new mongoose.Schema({
  Empid: Number,
  Username: String,
  Password: String
});

const Employees = mongoose.model('employees', employeesSchema);

module.exports = Employees;
