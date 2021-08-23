const express = require('express');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
const morgan = require('morgan');
const AppError = require('./utilities/AppError');
const GlobalErrorHandler = require('./Controllers/errorController');
const app = express();

// Middlewares
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

// Tour Routes
app.use('/api/v1/users', userRouter);
// User Routes
app.use('/api/v1/tours', tourRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`can't find ${req.originalUrl} on this server`, 404));
});
app.use(GlobalErrorHandler);
module.exports = app;
