const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./db/connect');
const SensorData = require('./models/SensorData');
require('dotenv').config();

const app = express();
const port = 3000;

// Connect to database
connectDB();
 
// Use body-parser to parse JSON bodies into JS objects
app.use(bodyParser.json());
app.use(cors());
// Endpoint to receive sensor data
app.post('/sensor-data', async (req, res) => {
  const { temperature, humidity } = req.body;

  if (temperature === undefined || humidity === undefined) {
    return res.status(400).json({ error: 'Temperature and humidity are required' });
  }

  try {
    const sensorData = new SensorData({
      temperature,
      humidity
    });

    await sensorData.save();

    res.json({ message: 'Sensor data received' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save sensor data' });
  }
});

// Endpoint to get the latest sensor data
app.get('/sensor-data', async (req, res) => {
  try {
    const latestData = await SensorData.findOne().sort({ timestamp: -1 });

    if (!latestData) {
      return res.status(404).json({ error: 'No sensor data available' });
    }

    res.json(latestData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve sensor data' });
  }
});

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
