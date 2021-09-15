const express = require('express');
const {
  getAllReviews,
  createReview,
  setTourUserIds,
  deleteReview,
  updateReview,
  getReview,
} = require('../Controllers/reviewController');
const { protect, restrictTo } = require('../Controllers/authController');

// POST /tour/234fad4/reviews
// GET /tour/234fad4/reviews
const router = express.Router({ mergeParams: true }); // get access to tourdId in the tourRouter

router
  .route('/')
  .get(getAllReviews)
  .post(protect, restrictTo(['user']), setTourUserIds, createReview);

router.use(protect);
router
  .route('/:id')
  .get(getReview)
  .patch(restrictTo(['user', 'admin']), updateReview)
  .delete(restrictTo(['user', 'admin']), deleteReview);
module.exports = router;
