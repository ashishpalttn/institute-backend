const express = require('express');
const { Sequelize } = require('sequelize');
const app = express();
const eventRoutes = require('./routes/eventRoutes'); // Import your event routes
require('dotenv').config();
const cors = require('cors')

const PORT = process.env.PORT || 5001;

// Initialize Sequelize connection
const sequelize = new Sequelize(process.env.DB_CONNECTION_STRING, {
  dialect: 'postgres',
  logging: false,
});

app.use(cors())
app.use(cors({
  origin: 'http://localhost:3001', // Allow only requests from this origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific methods
}));
// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies


app.use('/api', eventRoutes);

const startServer = async () => {
  try {
    // Test the database connection
    await sequelize.authenticate();
    console.log('Connected to the database');

    // Synchronize models with the database
    await sequelize.sync({ alter: true }); // Use { force: true } to drop and recreate tables

    // Start the Express server
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('Database connection failed', err);
    process.exit(1);
  }
};

// Start the server
startServer();
