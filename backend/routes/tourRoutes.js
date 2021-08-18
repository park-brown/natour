const express = require('express');
const router = express.Router();
const {
  getAllTours,
  createTour,
  getTour,
  updateTour,
  deleteTour,
  checkID,
  checkBody,
} = require('../Controllers/tourController');
router.param('id', checkID);

router.route('/').get(getAllTours).post(checkBody, createTour); //chain middleware
router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
