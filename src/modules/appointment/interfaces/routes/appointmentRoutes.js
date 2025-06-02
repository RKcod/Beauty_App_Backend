const express = require('express');
const AppointmentController = require('../controllers/AppointmentController');
// const authMiddleware = require('../middlewares/authMiddleware'); // Example: if you have auth

const router = express.Router();

// --- Public or General Routes ---
// Example: Get appointments for a specific shop (public view, maybe limited info)
router.get('/shop/:shopId/appointments', AppointmentController.getByShop);

// --- Authenticated Routes (example, assuming some auth middleware) ---
// To apply auth to all routes below: router.use(authMiddleware);

// Create a new appointment
router.post('/appointments', AppointmentController.create);

// Get a specific appointment by ID
router.get('/appointments/:id', AppointmentController.getById);

// Get appointments for a specific user (e.g., a user viewing their own appointments)
// The :userId could come from authenticated user (req.user.id) or admin viewing a user's appts
router.get('/users/:userId/appointments', AppointmentController.getByUser);


// Update appointment status (e.g., confirm, complete) by appointment ID
router.patch('/appointments/:id/status', AppointmentController.updateStatus);

// Cancel an appointment by ID
router.patch('/appointments/:id/cancel', AppointmentController.cancel);


module.exports = router;
