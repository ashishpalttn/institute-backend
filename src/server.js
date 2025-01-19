const express = require('express');
const { Sequelize } = require('sequelize');
const cors = require('cors');
const eventRegisterRoutes = require('./routes/eventRoutes'); // Import your event routes
const revenRegistrationRoutes = require('./routes/event.routes')
const paymentRoutes = require('./routes/paymentRoutes')
const studentRoutes = require('../src/routes/student.routes')
require('dotenv').config();
const authMiddleware = require('./middlewares/protectRoute');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());


app.use(cors({
  origin: ['http://localhost:3000','http://localhost:3001','http://localhost:3002'], // Allow only requests from this origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific methods
  credentials: true    
}));



const PORT = process.env.PORT || 5001;

// Initialize Sequelize connection
const sequelize = new Sequelize(process.env.DB_CONNECTION_STRING, {
  dialect: 'postgres',
  logging: false,
});



// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

app.use('/api', eventRegisterRoutes);
app.use('/secure/student', studentRoutes)

app.use(authMiddleware);
app.use('/event-registration', revenRegistrationRoutes);
app.use('/api/payment', paymentRoutes);
app.use('*',(req, res, next)=>{
  res.status(404).json({
    status: 'failed',
    message: 'route not found'
  })
})



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
