const mongoose = require('mongoose');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mealTracker';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

const connection = mongoose.connection;

connection.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

connection.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = {
  connection,
  MONGODB_URI
};
