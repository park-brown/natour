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

process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});
process.on('unhandledRejection', (err) => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on PORT ${port}...`);
});
