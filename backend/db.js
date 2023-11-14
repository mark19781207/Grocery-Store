// db.js
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://markqiuym:1@cluster0.j05qwbl.mongodb.net/grocery_system', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = mongoose;
