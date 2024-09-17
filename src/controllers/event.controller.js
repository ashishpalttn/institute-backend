// /src/controllers/event.controller.js
const  {EventRegistration}  = require('../../models');

exports.createEventRegistration = async (req, res) => {
  try {
    const newRegistration = await EventRegistration.create(req.body);
    res.status(201).json(newRegistration);
  } catch (error) {
    console.error('Error fetching registrations:', error); // Add this line
    res.status(500).json({ error: 'Failed to create event registration' });
  }
};

exports.getEventRegistrations = async (req, res) => {
  try {
    const registrations = await EventRegistration.findAll();
    res.status(200).json(registrations);
  } catch (error) {
    console.error('Error fetching registrations:', error); // Add this line
    res.status(500).json({ error: 'Failed to fetch event registrations' });
  }
};

exports.deleteEventRegistration = async (req, res) => {
  const { id } = req.params; // Extract id from request parameters

  try {
    const deleted = await EventRegistration.destroy({
      where: { id },
    });

    if (deleted) {
      res.status(200).json({ message: 'Event registration deleted successfully' });
    } else {
      res.status(404).json({ error: 'Event registration not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete event registration' });
  }
};


exports.updateEventRegistration = async (req, res) => {
  const { id } = req.params; // Get the ID from the URL parameters
  const updates = req.body; // Get the fields to update from the request body

  try {
    const registration = await EventRegistration.findByPk(id); // Find the record by primary key

    if (!registration) {
      return res.status(404).json({ error: 'Event registration not found' });
    }

    // Update the record with the new values
    await registration.update(updates);
    res.status(200).json(registration);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update event registration' });
  }
};
