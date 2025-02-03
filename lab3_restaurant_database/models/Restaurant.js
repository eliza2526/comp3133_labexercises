const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const RestaurantSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    building: {
      type: String,
      required: false
    },
    street: {
      type: String,
      required: false
    },
    zipcode: {
      type: String,
      required: false
    }
  },
  city: {
    type: String,
    required: true
  },
  cuisine: {
    type: String,
    required: true
  },
  restaurant_id: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('restaurant', RestaurantSchema);