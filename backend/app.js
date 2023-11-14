// app.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const Employees = require('./models/employees');

app.use(cors());
app.use(bodyParser.json());

// const groceryItemRoutes = require('./routes/groceryItemRoutes');
const cartsRoutes = require('./routes/cartsRoutes');
const employeesRoutes = require('./routes/employeesRoutes');
const ordersRoutes = require('./routes/ordersRoutes');
const productsRoutes = require('./routes/productsRoutes');
const loginRoutes = require('./routes/loginRoutes');
// app.use('/groceryItems', groceryItemRoutes);
app.use('/carts', cartsRoutes);
app.use('/employees', employeesRoutes);
app.use('/orders', ordersRoutes);
app.use('/products', productsRoutes);
app.use('/login', loginRoutes);

// Hardcoded secret key (not recommended for production)
const secretKey = 'your_secret_key';

// In-memory user database for demonstration
const users = [];

app.use(bodyParser.json());

// Registration endpoint
app.post('/register', async (req, res) => {
  const newEmployees = new Employees(req.body);
  try {
    const Employees = await newEmployees.save();
    res.status(201).json({ Employees, message: 'User registered successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
