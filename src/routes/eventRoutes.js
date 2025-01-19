const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const selectiveAuth = require('../utils/middlewareWrapper')
const authMiddleware = require('../middlewares/protectRoute')


const protectedRoutes = [
    { method: 'POST', path: '/events' },
    // { method: 'GET', path: '/events'},
    { method: 'DELETE', path: '/events/:id' },
  ];
  
  // Apply selectiveAuth middleware
  router.use(selectiveAuth(protectedRoutes, authMiddleware));
  

router.post('/events', eventController.createEvent);
router.get('/events', eventController.getAllEvents);
router.get('/events/:id', eventController.getEventById);
router.put('/events/:id', eventController.updateEvent);
router.delete('/events/:id', eventController.deleteEvent);

module.exports = router;

