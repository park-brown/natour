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
} = require('../Controllers/tourController');
const { protect, restrictTo } = require('../Controllers/authController');
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

module.exports = router;
