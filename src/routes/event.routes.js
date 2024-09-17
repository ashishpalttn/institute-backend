// /src/routes/event.routes.js
const express = require('express');
const router = express.Router();
const eventController = require('../controllers/event.controller');

router.post('/registrations', eventController.createEventRegistration);
router.get('/registrations', eventController.getEventRegistrations);
router.delete('/registrations/:id', eventController.deleteEventRegistration);
router.patch('/registrations/:id', eventController.updateEventRegistration); 


module.exports = router;
