const express = require('express');
const router = express.Router();
const {
  getAllTours,
  createTour,
  getTour,
  updateTour,
  deleteTour,
  AliasTop5Tours,
} = require('../Controllers/tourController');
router.route('/top-5-tours').get(AliasTop5Tours, getAllTours);
router.route('/').get(getAllTours).post(createTour); //chain middleware
router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
