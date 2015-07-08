var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var client = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },

  weddingDate: {
    type: Date
  },

  package: {

  },

  location: {
    city: {
      type: String
    },
    preferredVenue: {
      type: String
    }
  },

  vendors: [],

  planner: {
    type: String
  },

  notes: []

});

module.exports = mongoose.model('client', client);