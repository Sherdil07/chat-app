const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("Attempting to connect to MongoDB...");
    console.log(`MONGO_URI: ${process.env.MONGO_URI}`);

    await mongoose.connect(process.env.MONGO_URI, {});

    console.log("MongoDB Connected!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
