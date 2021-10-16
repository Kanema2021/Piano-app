const mongoose = require('mongoose');

// set up mongo connection and input db below**
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;