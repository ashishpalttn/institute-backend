const express = require('express');
const eventRoutes = require('./routes/eventRoutes');
const { errorHandler } = require('./middleware/errorMiddleware');

const app = express();

app.use(express.json());

app.use('/api', eventRoutes);

app.use(errorHandler);

module.exports = app;
