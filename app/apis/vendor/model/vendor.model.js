var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var vendor = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },

  location: {
    city: {
      type: String
    }
  },

  clients: [],

  notes: []

});

module.exports = mongoose.model('vendor', vendor);