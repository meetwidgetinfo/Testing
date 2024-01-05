const mongoose = require("mongoose");

const URI = process.env.CONNECTDB_URI;

const connectDB = async () => {
  try {
    console.log("database connection successfull");
    mongoose.connect(URI);
  } catch (error) {
    console.error("database connection failed");
    process.exit();
  }
};

module.exports = connectDB;
