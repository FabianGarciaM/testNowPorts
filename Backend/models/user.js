//Require Mongoose
var mongoose = require("mongoose");

// Define schema
var Schema = mongoose.Schema;

var User = new Schema({
  Name: String,
  Password: Date,
  Phone: Number,
});

// Compile model from schema
module.exports = mongoose.model("User", User);

