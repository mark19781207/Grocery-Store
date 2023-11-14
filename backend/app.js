// app.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const jwt = require('jsonwebtoken');
const cors = require('cors');
const Employees = require('./models/employees');
const authMiddleware = require('./middlewares/authMiddleware');

app.use(cors());
app.use(bodyParser.json());

// const groceryItemRoutes = require('./routes/groceryItemRoutes');
const cartsRoutes = require('./routes/cartsRoutes');
const employeesRoutes = require('./routes/employeesRoutes');
const ordersRoutes = require('./routes/ordersRoutes');
const productsRoutes = require('./routes/productsRoutes');
// app.use('/groceryItems', groceryItemRoutes);
app.use('/carts', cartsRoutes);
app.use('/employees', employeesRoutes);
app.use('/orders', ordersRoutes);
app.use('/products', productsRoutes);

// Hardcoded secret key (not recommended for production)
const secretKey = 'your_secret_key';

// In-memory user database for demonstration
const users = [];

app.use(bodyParser.json());

// Add a user authentication route
app.post('/login', async (req, res) => {
  // Replace with your user authentication logic
  const { username, password } = req.body;

  // Check username and password against your database or user data
  const employees = await Employees.find({ Username: username, Password: password });
  if (employees.length <= 0) {
    return res.status(401).json({ message: 'Username or password does not match!' });
  }
  if (employees) {
    // Create a token
    const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
    res.json({ token, message: `Welcome ${username}` });
  } else {
    res.status(401).json({ message: 'Authentication failed' });
  }
});
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

// Protected route
app.get('/protected', (req, res) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1]; // Split by space and get the second part
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    res.json({ message: 'Protected route', user: decoded.username });
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
