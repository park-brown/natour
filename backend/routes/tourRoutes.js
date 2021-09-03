const express = require('express');
const router = express.Router();
const {
  getAllTours,
  createTour,
  getTour,
  updateTour,
  deleteTour,
  AliasTop5Tours,
  getTourStats,
  getMonthlyPlan,
  getToursWithin,
  getDistances,
} = require('../Controllers/tourController');
const { protect, restrictTo } = require('../Controllers/authController');
const reviewRouter = require('./reviewRoutes');

// nested routes
router.use('/:tourId/reviews', reviewRouter);
router.route('/top-5-tours').get(AliasTop5Tours, getAllTours);
router.route('/tour-statistic').get(getTourStats);
router.route('/monthly-plan/:year').get(getMonthlyPlan);
router
  .route('/')
  .get(getAllTours)
  .post(protect, restrictTo(['admin', 'lead-guide']), createTour); //chain middleware
router
  .route('/:id')
  .get(getTour)
  .patch(protect, restrictTo(['admin', 'lead-guide']), updateTour)
  .delete(protect, restrictTo(['admin', 'lead-guide']), deleteTour);

router
  .route('/tours-within/:distance/center/:latlng/unit/:unit')
  .get(getToursWithin);
// /tours-within?distance=233&center=-40,45&unit=mi
// /tours-within/233/center/-40,45/unit/mi

router.route('/distances/:latlng/unit/:unit').get(getDistances);
module.exports = router;
