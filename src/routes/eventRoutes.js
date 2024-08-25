const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

router.post('/events', eventController.createEvent);
router.get('/events', eventController.getAllEvents);
router.get('/events/:id', eventController.getEventById);
router.put('/events/:id', eventController.updateEvent);
router.delete('/events/:id', eventController.deleteEvent);

module.exports = router;



// const express = require('express');
// const { createEvent } = require('../controllers/eventController');
// const router = express.Router();

// router.post('/events', createEvent);

// module.exports = router;
