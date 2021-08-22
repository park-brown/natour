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
router.route('/top-5-tours').get(AliasTop5Tours, getAllTours);
router.route('/tour-statistic').get(getTourStats);
router.route('/monthly-plan/:year').get(getMonthlyPlan);
router.route('/').get(getAllTours).post(createTour); //chain middleware
router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
