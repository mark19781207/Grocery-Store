// routes/employeesRoutes.js
const express = require('express');
const router = express.Router();
const employeesController = require('../controllers/employeesController');
const authMiddleware = require('../middlewares/authMiddleware');

// Routes for employees Items
router.get('/', authMiddleware, employeesController.getAllEmployees);
router.get('/:id', authMiddleware, employeesController.getEmployeesById);
router.post('/', authMiddleware, employeesController.createEmployees);
router.put('/:id', authMiddleware, employeesController.updateEmployees);
router.delete('/:id', authMiddleware, employeesController.deleteEmployees);
// router.get('/', employeesController.getAllEmployees);
// router.get('/:id', employeesController.getEmployeesById);
// router.post('/', employeesController.createEmployees);
// router.put('/:id', employeesController.updateEmployees);
// router.delete('/:id', employeesController.deleteEmployees);

module.exports = router;
