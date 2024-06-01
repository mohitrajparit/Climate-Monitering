const mongoose = require('mongoose');
const SensorData=require('../models/SensorData')
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully ...');

    // Find the first five documents
    const firstFiveDocuments = await SensorData.find().limit(5);

    const allLength=await SensorData.find();

    if (allLength.length > 5) {
      // Delete the first five documents
      await SensorData.deleteMany({ _id: { $in: firstFiveDocuments.map(doc => doc._id) } });
      console.log('First five documents deleted successfully.');
    } else {
      console.log('No documents found to delete.');
    }
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};



module.exports = connectDB;
