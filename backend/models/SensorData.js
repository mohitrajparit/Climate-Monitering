const mongoose = require('mongoose');

const SensorDataSchema = new mongoose.Schema({
  temperature: {
    type: Number,
    required: true
  },
  humidity: {
    type: Number,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const SensorData = mongoose.model('SensorData', SensorDataSchema);

module.exports = SensorData;
