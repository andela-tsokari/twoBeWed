var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var user = new Schema({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    match: [/@twobewed.com/, 'Sign Up with your @twobewed.com email address'],
    required: 'Sign Up with your @twobewed.com email address',
    lowercase: true,
    unique: 'A user with this email already exists'
  },

  username: {
    type: String,
    required: 'Select a username',
    unique: 'This username has been taken'
  },

  password: {
    type: String,
    required: true
  },

  clients: []

});

module.exports = mongoose.model('user', user);
