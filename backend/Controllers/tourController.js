const fs = require('fs');
const Tour = require('../Models/tourModel');
// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
// );

//Tour Route handlers
exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tours: null,
    },
  });
};
exports.getTour = (req, res) => {};
exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create({ ...req.body });

    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'rejected',
      data: {
        message: 'Invalid data sent',
      },
    });
  }
};
exports.updateTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated Tour Here...>',
    },
  });
};
exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null,
  });
};
