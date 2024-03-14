const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://AdminUser:AdminUser@cluster0.ea1ducj.mongodb.net/doctorapp');
    console.log(`Mongodb connected ${mongoose.connection.host}`.bgGreen.white);
  } catch (error) {
    console.log(`MongoDB server issue ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
