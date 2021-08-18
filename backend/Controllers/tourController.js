const fs = require('fs');

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

exports.checkID = (req, res, next, val) => {
  console.log('id:', val);
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: 'rejected',
      messgage: 'invalid request',
    });
  }
  next();
};

exports.checkBody = (req, res, next) => {
  const { name, price } = req.body;

  if (!name && !price) {
    return res.status(400).json({
      status: 'rejected',
      message: 'bad request',
    });
  }
  next();
};
//Tour Route handlers
exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tours: tours,
    },
  });
};
exports.getTour = (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);

  res.status(200).json({
    status: 'success',
    data: {
      tour: tour,
    },
  });
};
exports.createTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = {
    id: newId,
    ...req.body,
  };
  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          tours: newTour,
        },
      });
    }
  );
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
