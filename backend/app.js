const express = require('express');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
const morgan = require('morgan');
const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Tour Routes
app.use('/api/v1/users', userRouter);
// User Routes
app.use('/api/v1/tours', tourRouter);

module.exports = app;
