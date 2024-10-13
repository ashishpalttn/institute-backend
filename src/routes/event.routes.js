// /src/routes/event.routes.js
const express = require('express');
const router = express.Router();
const eventController = require('../controllers/event.controller');

router.post('/registrations', eventController.createEventRegistration);
router.get('/registrations', eventController.getEventRegistrations);
router.get('/export-students/:eventName', eventController.exportStudentsByEvent);
router.get('/participant-list/:eventName', eventController.getParticepantList);
router.delete('/registrations/:id', eventController.deleteEventRegistration);
router.patch('/registrations/:id', eventController.updateEventRegistration);
router.put('/registrations/:id', eventController.updateRegistration);


module.exports = router;
