const express = require('express');
const rateLimit = require('express-rate-limit');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
const reviewRouter = require('./routes/reviewRoutes');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const mongoSanitize = require('express-mongo-sanitize');
const xssClean = require('xss-clean');
const hpp = require('hpp');
const AppError = require('./utilities/AppError');
const GlobalErrorHandler = require('./Controllers/errorController');
const app = express();

// global  Middlewares
// set security https headers
app.use(helmet());
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000, // 100 request per hour from an IP,
  message: 'too many request from this IP, please try again in an hour',
});
// limit request from the same IP
app.use('/api', limiter);

// body parser, reading data into req.body
app.use(express.json());
// after reading data, do data sanitization
// data sanitization against NoSQL query injection, EXAMPLE
//  {
//   "email": {
//     "$gt": ""
// },
// "password": "123456789"
// }
app.use(mongoSanitize());
// data sanitization against XSS query injection
app.use(xssClean());
// prevent http parameter pollution
app.use(
  hpp({
    whitelist: [
      'duration',
      'ratingsQuantity',
      'ratingsAverage',
      'maxGroupSize',
      'difficulty',
      'price',
    ],
  })
);
app.use(compression());
// User Routes
app.use('/api/v1/users', userRouter);
//Tour Routes
app.use('/api/v1/tours', tourRouter);
//review Routes
app.use('/api/v1/reviews', reviewRouter);
app.all('*', (req, res, next) => {
  next(new AppError(`can't find ${req.originalUrl} on this server`, 404));
});
app.use(GlobalErrorHandler);
module.exports = app;
