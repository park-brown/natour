const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config({
  path: './config.env',
});
// connect db
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE__PASSWORD
);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB connection successful');
  });
// dotenv config should run before app init
const app = require('./app');
// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on PORT ${port}...`);
});
