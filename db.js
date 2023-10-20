const mongoose = require('mongoose');

// Replace 'your-mongodb-connection-string' with your actual MongoDB connection string
mongoose.connect('mongodb+srv://admin:admin@cluster0.97gtqkr.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = mongoose;
