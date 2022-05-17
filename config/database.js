const mongoose = require("mongoose");

exports.connect = () => {
  mongoose
    .connect('mongodb+srv://dharm2302:123@cluster0.zvlau.mongodb.net/hr?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.log("database connection failed. exiting now...");
      console.error(error);
      process.exit(1);
    });
};