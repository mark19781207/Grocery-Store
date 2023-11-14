// routes/loginRoutes.js
const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');
const authMiddleware = require('../middlewares/authMiddleware');

// Routes for employees Items
router.post('/', loginController.getSpecificEmployees);
router.get('/protected', authMiddleware, loginController.auth);

module.exports = router;
